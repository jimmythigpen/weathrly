import React, { Component } from 'react';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: localStorage.getItem('weathrly_location') || ''
    }

    this.setLocation = this.setLocation.bind(this);
  }

  setLocation(location) {
    return this.setState({ location });
  }

  render() {
    return (
      <div>
        <h1>Weathrly</h1>
        <Welcome setLocation={this.setLocation} />
        <CurrentWeather location={this.state.location} />
      </div>
    )
  }
}

export default App;
