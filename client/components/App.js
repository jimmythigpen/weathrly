import React, { Component } from 'react';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import Search from './Search';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: localStorage.getItem('weathrly_location') || '',
    };

    this.setLocation = this.setLocation.bind(this);
  }

  setLocation(location) {
    return this.setState({ location });
  }

  render() {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Weathrly"
        />
        <div className='app-container'>
          <Welcome setLocation={this.setLocation} />
          <CurrentWeather location={this.state.location} />
        </div>
      </div>
    );
  }
}

export default App;
