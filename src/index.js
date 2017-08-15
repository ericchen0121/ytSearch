import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBtDOCbe7hQC6DB4cxM84DfJWCt7aLGjlg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }

    // called with an object and a callback function
    YTSearch({key: API_KEY, term: 'efren'}, (videos) => {
      this.setState({ videos })
    })

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
