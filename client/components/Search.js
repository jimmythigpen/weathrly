import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { withApollo } from 'react-apollo';
import { getLocations } from '../graphql/queries';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
    };
  }

  fetchLocations(searchText) {
    if (!searchText) return this.setState({ searchResults: [] });

    this.props.client.query({
      query: getLocations,
      variables: {
        searchText,
      },
      fetchPolicy: 'network-only'
    }).then(({ data: { getLocations }}) => {
      return this.setState({ searchResults: getLocations });
    });
  }

  render() {
    return (
      <div>
        <AutoComplete
          autoFocus
          hintText='Search Locations'
          onUpdateInput={_.debounce((searchText) => this.fetchLocations(searchText), 300)}
          onNewRequest={(chosenRequest, index) => {
            localStorage.setItem('weathrly_location', chosenRequest.resultString);
            this.props.setLocation(chosenRequest.resultString);
          }}
          dataSource={this.state.searchResults}
          dataSourceConfig={{
            text: 'name',
            value: 'resultString',
          }}
          filter={AutoComplete.caseInsensitiveFilter}
          maxSearchResults={5}
          floatingLabelText="Search Locations"
          fullWidth
        />
        <br />
        <br />
      </div>
    );
  }
}

export default withApollo(Search);
