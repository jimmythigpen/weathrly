import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import moment from 'moment';
import { currentWeather } from '../graphql/queries';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import LinearProgress from 'material-ui/LinearProgress';

class CurrentWeatherComponent extends Component {
  render() {
    const { location } = this.props;

    if (!location) return null;
    if (this.props.location && this.props.data.loading) return <LinearProgress />;

    const {
      data: {
        getConditions: {
          cityName,
          currentDay,
          currentTemp,
        },
        getForecast: {
          expectedLow,
          expectedHigh,
          summary,
          icon,
        },
      },
    } = this.props;

    return (
      <div>
        <Paper style={{ backgroundColor: '#e6e6e6', padding: '10px' }} zDepth={1}>
          <div style={{ minHeight: '130px' }}>
            <div className='weather-info city-name'>{cityName}</div>
            <div className='weather-info'>{moment.unix(currentDay).format('dddd, MMMM Do')}</div>
            <div className='weather-info temp'>{currentTemp}&#8457;</div>
            <img className='weather-info' src={icon} />
          </div>
          <Divider />
          <div className='forecast-header'>Today's Forecast</div>
          <div className='weather-info temp'>Low: {expectedLow}&#8457;</div>
          <div className='weather-info temp'>High: {expectedHigh}&#8457;</div>
          <div>{summary}</div>
        </Paper>
      </div>
    );
  }
}

export default CurrentWeather = graphql(currentWeather, {
  options: ({ location }) => ({
    skip: !location,
    variables: {
      location,
    },
  }),
})(CurrentWeatherComponent);
