import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyDhidLeSuppdOgFE0w6CF6m1PAdi8M4jQ0';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null,
			search: "Joe"
		};

		YTSearch ({
			key: API_KEY,
			term: this.state.search},
			(videos) => {
				this.setState({ 
					videos:videos,
					selectedVideo: videos[0]
				});
			}
		)
	}

	render() {
		return (
			<div>
				<SearchBar onInputSearch={input => this.setState({input}) } />
				<VideoDetail video={ this.state.selectedVideo } />
				<VideoList
					videos={ this.state.videos }
					onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
