import React from 'react';
import $ from 'jquery';

class Tweets extends React.Component {
  constructor(props) {
  super(props);
    this.getTweets = this.getTweets.bind(this);
    this.tweets = this.tweets.bind(this);
    this.state = { tweets: [] }
  }

  getTweets(e) {
    e.preventDefault();
    $.ajax({
      url: `/tweets/${this.refs.handle.value}`,
      type: 'GET'
    }).done( tweets => {
      this.setState({ tweets });
      this.refs.tweetForm.reset();
    }).fail(() => console.log("not working"));
  }

  tweets() {
    return this.state.tweets.map( tweet => {
      return (
        <li className="collection-item" key={tweet.id}>
          {tweet.text}
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <h3 className="center">Search for Actor Tweets</h3>
        <form ref="tweetForm" onSubmit={this.getTweets}>
          <input ref="handle" placeholder="handle"></input>
        </form>
        <ul className="collection">
          {this.tweets()}
        </ul>
      </div>
    )
  }
}

export default Tweets;
