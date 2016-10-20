import React from 'react';
import $ from 'jquery';

class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.activities = this.activities.bind(this);
    this.getActivities = this.getActivities.bind(this);
    // this.addActivites = this.addActivites.bind(this);
    this.baseUrl = "http://nuvi-challenge.herokuapp.com/activities";
    this.state = { activities: [] };
  }

getActivities() {
  $.ajax({
    url: `${this.baseUrl}`,
    type: 'GET',
  }).done( activities => {
    this.setState({ activities });
  }).fail(() => {  })
}

// deleteProducts(id) {
//   this.setState({
//     products: this.state.products.filter( p => p.id !== id)
//   });
//   $.ajax({
//     url: `${this.baseUrl}/products/${id}`,
//     type: 'DELETE'
//   }).fail( () => {
//     alert('Product failed to delete');
//     this.getProducts;
//   });
// }

activities(){
  return this.state.activities.map( activity => {
    return (
      <tr key={activity.id}>
        <td>{activity.actor_username}</td>
        <td>{activity.activity_likes}</td>
        <td>{activity.actor_url}</td>
        <td>
          <button className="btn blue">Like Me!</button>
        </td>
        <td>
          <button className="btn red" onClick={() => this.deleteProducts(product.id)}>UnLike</button>
        </td>
      </tr>
    )
  });
}

// addProduct(e) {
//   e.preventDefault();
//   $.ajax({
//     url: `${this.baseUrl}/activities`,
//     type: 'POST',
//     data: {
//       product: {
//         name: this.refs.name.value,
//         description: this.refs.description.value,
//         base_price: this.refs.base_price.value
//       }
//     }
//   }).done( product => {
//     if (this.state.products.length === 0)
//     this.getProducts();
//     this.setState({ products: [{...product}, ...this.state.products]});
//     this.refs.addForm.reset();
//   });
// }

  render() {
    return (
      <div>
        <h3 className="center">Activities</h3>
        <button className="btn" onClick={this.getActivities}>Get Activities</button>
        <table className="table">
          <thead>
            <tr>
              <th>Actor Username</th>
              <th>Current Likes</th>
              <th>Social Media Link</th>
              <th>like!</th>
              <th>UnLike</th>
            </tr>
          </thead>
          <tbody>{this.activities()}</tbody>
        </table>
      </div>
  )};
};

export default Activities;
