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
			axios.get('http://localhost:3001/api/v1/trips.json')
				.then(response => {
					console.log(response)
					this.setState({
						trips: response.data
					})
				})
				.catch(error => console.log(error))
		};

	render() {
		var tripsInSearch = this.state.trips.filter(trip => trip.passed === false);
		var tripsPassed = this.state.trips.filter(trip => trip.passed === true);
		return (
			<div className="Trips-container">
				<p>in search</p>
				{tripsInSearch.map( trip => {
					return (
						<div className="single-trip" key={trip.id}>
							<h4>{trip.departure_station} - {trip.arrival_station}</h4>
						</div>
					);
				})}
				<p>passed</p>
				{tripsPassed.map( trip => {
					return (
						<div className="single-trip" key={trip.id}>
							<h4>{trip.departure_station} - {trip.arrival_station}</h4>
						</div>
					);
				})}
			</div>
		)
	}
}

export default TripsContainer;