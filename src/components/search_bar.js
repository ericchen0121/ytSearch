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
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value) }
          //
          // NOTE: If you want to trigger search only on an Enter click, uncomment code
          //
          onKeyPress={event => {
            if(event.key === 'Enter') {
              this.props.onSearchChange(this.state.term)
            }
          }}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchChange(this.state.term)
  }

}

// any component that imports 'search_bar' will get our SearchBar component
export default SearchBar;
