import React, { Component } from 'react'

class SearchBar extends Component {

	constructor(props) {
		super(props)

		this.state = {
			term: 'Test'
		}
	}

	render() {
		return (
			<div>
				<input value={this.state.term} onChange={this.onInputChange}/>
				<h1>{this.state.term}</h1>
			</div>
		)
	}

	onInputChange = (event) => {
		this.setState({
			term: event.target.value
		})
	}

}//End SearchBar Class

export default SearchBar