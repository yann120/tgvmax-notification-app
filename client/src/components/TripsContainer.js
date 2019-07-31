import React, { Component } from 'react';
import axios from 'axios';

class TripsContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			trips: []
		}
	};

		componentDidMount() {
			axios.get('http://localhost:3001/api/v1/lists.json')
				.then(response => {
					console.log(response)
					this.setState({
						trips: response.data
					})
				})
				.catch(error => console.log(error))
		};

	render() {
		return (
			<div className="Trips-container">
				trips
			</div>
		)
	}
}

export default TripsContainer;