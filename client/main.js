import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ApolloProvider } from 'react-apollo';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import App from '/client/components/App';

const client = new ApolloClient(meteorClientConfig({
  dataIdFromObject: (result) => {
    if (_.has(result, 'CaseID') && _.has(result, '__typename')) return result.__typename + result.CaseID;
    return null;
  }
}));

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#58585a'
  },
})

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <MuiThemeProvider muiTheme={muiTheme}>
          <App />
      </MuiThemeProvider>
    </ApolloProvider>,
    document.getElementById('app')
  );
});
