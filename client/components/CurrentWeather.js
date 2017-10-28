import React, { Component } from 'react';
import Welcome from './Welcome';
import { graphql } from 'react-apollo';
import moment from 'moment';
import { currentWeather } from '../graphql/queries';

class CurrentWeatherComponent extends Component {

  render() {
    const { location } = this.props;

    if (!location) return null;
    if (this.props.location && this.props.data.loading) return <div>Loading..</div>;

    const { 
      data: { 
        getConditions: {
          cityName,
          currentDay,
          currentTemp
        },
        getForecast: {
          expectedLow,
          expectedHigh,
          summary,
          icon
        }
      } } = this.props;

    return (
      <div>
        <div>
          <h2>Current Weather</h2>
          <div>{cityName}</div>
          <div>{moment.unix(currentDay).format('dddd, MMMM Do')}</div>
          <br />
          <img src={icon} />
          <div>{currentTemp}</div>
          <div>Low: {expectedLow} High: {expectedHigh}</div>
          <div>{summary}</div>
        </div>
      </div>
    )
  }
}

export default CurrentWeather = graphql(currentWeather, {
  options: ({ location }) => ({
    skip: !location,
    variables: {
      location
    }
  }),
})(CurrentWeatherComponent);
