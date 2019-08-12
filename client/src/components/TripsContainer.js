import React, { Component } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import Select from 'react-select';

const options = [
  { value: 'Paris', label: 'Paris' },
  { value: 'Nice', label: 'Nice' },
  { value: 'Toulouse', label: 'Toulouse' },
]

class TripsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
        { title: "Departure", field: "departure_station",
        editComponent: props => (
          // console.log("props value" + props.value);
          <Select
            value={{label: props.value, value: props.value}}
            onChange={e => props.onChange(e.value)}
            options={options}
          />
        ) },
				{ title: "Arrival", field: "arrival_station" },
				{ title: "From", field: "from_date", type: 'datetime' },
				{
				  title: "To",
				  field: "to_date",
				  type: 'datetime' ,
				},
			  ],
        data: []
		}
	}
	componentDidMount() {
		axios.get('http://localhost:3001/api/v1/trips.json')
			.then(response => {
        console.log(response)
        var apiData = response.data
        apiData.forEach(element => {
          element.from_date = new Date(element.from_date)
          element.to_date = new Date(element.to_date)
        });
				this.setState({
					data: apiData
				})
				
			})
			.catch(error => console.log(error))
	};


	render() {
    const { selectedOption } = this.state;
		return(
		<MaterialTable
      title="Trains"
      columns={this.state.columns}
      data={this.state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              data.push(newData);
              this.setState({ ...this.state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              data[data.indexOf(oldData)] = newData;
              this.setState({ ...this.state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              data.splice(data.indexOf(oldData), 1);
              this.setState({ ...this.state, data });
            }, 600);
          }),
      }}
    />
	)
	}
}

export default TripsContainer;