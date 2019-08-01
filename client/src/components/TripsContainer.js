import React, { Component } from 'react';
import axios from 'axios';
import { EditingState, DataTypeProvider } from '@devexpress/dx-react-grid';
import {
	Grid,
	Table,
	TableHeaderRow,
	TableEditRow,
	TableEditColumn,
  } from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';


const getRowId = row => row.id;

const TableComponent = ({ ...restProps }) => (
<Table.Table
	{...restProps}
	className="table-striped"
/>
);

const DateFormatter = ({ value }) => value.replace(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(.+$)/, '$3/$2/$1 $4:$5');

const DateTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={DateFormatter}
    {...props}
  />
);

class TripsContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			columns: [
				{ name: 'departure_station', title: 'Departure' },
				{ name: 'arrival_station', title: 'Arrival' },
				{ name: 'from_date', title: 'From' },
				{ name: 'to_date', title: 'To' },
			  ],
			rows: [],
			dateColumns: ['from_date', 'to_date'],
		}
		this.commitChanges = this.commitChanges.bind(this);
	};
	
	componentDidMount() {
		axios.get('http://localhost:3001/api/v1/trips.json')
			.then(response => {
				console.log(response)
				this.setState({
					trips: response.data,
					rows: response.data
				})
			})
			.catch(error => console.log(error))
	};

	commitChanges({ added, changed, deleted }) {
		let { rows } = this.state;
		if (added) {
		  const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
		  rows = [
			...rows,
			...added.map((row, index) => ({
			  id: startingAddedId + index,
			  ...row,
			})),
		  ];
		}
		if (changed) {
		  rows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
		}
		if (deleted) {
		  const deletedSet = new Set(deleted);
		  rows = rows.filter(row => !deletedSet.has(row.id));
		}
		this.setState({ rows });
	  }

	render() {
		// var tripsInSearch = this.state.trips.filter(trip => trip.passed === false);
		// var tripsPassed = this.state.trips.filter(trip => trip.passed === true);
		const { rows, columns, dateColumns } = this.state;
		return (

			<div className="card">
			  <Grid
				rows={rows}
				columns={columns}
				getRowId={getRowId}
			  >
				<EditingState
				  onCommitChanges={this.commitChanges}
				/>
				<DateTypeProvider
            		for={dateColumns}
          		/>
				<Table
            		tableComponent={TableComponent}
          		/>
				<TableHeaderRow />
				<TableEditRow />
				<TableEditColumn
				  showAddCommand
				  showEditCommand
				  showDeleteCommand
				/>
			  </Grid>
			</div>
		);
	}
}

export default TripsContainer;