import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar'
import VideoList from './components/videoList'

const API_KEY = 'AIzaSyDhidLeSuppdOgFE0w6CF6m1PAdi8M4jQ0';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: []
		};

		YTSearch ({
			key: API_KEY,
			term: 'Joe Roxbury'},
			(videos) => {
				this.setState({ videos });
			}
		)
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
