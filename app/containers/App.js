import React from 'react';
import Activities from '../components/Activities';
import Tweets from '../components/Tweets';

const App = () => (
  <div className="row">
    <div className="col s12 m6">
      <Activities />
    </div>
    <div className="col s12 m6">
      <Tweets />
    </div>
  </div>
);

export default App;
