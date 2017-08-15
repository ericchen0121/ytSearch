// whenever we translate JSX to normal JS, this turns into a call like React.createElement()
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={ event => this.setState({ term: event.target.value }) } />
      </div>
    );
  }

}

// any component that imports 'search_bar' will get our SearchBar component
export default SearchBar;
