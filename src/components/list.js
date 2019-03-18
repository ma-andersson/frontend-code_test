import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container,Table} from "react-bootstrap";
import { Link } from 'react-router-dom';

class List extends Component {
    // Initialize the state
    constructor(props){
        super(props);

        this.state = {
            list: []
        }
        this.sortList = this.sortList.bind(this);
        this.compareByColumn = this.compareByColumn.bind(this);
        this.filterList = this.filterList.bind(this);
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.getList();
    }

    // Retrieve the list of restaurants from the API
    getList () {
        fetch('/api/list')
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error ('Can not retrieve information');
                }})
            .then(data => {
                this.setState({list: data})
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // Sort list in ascending order, depending on which column selected.
    sortList (column){
        const list = this.state.list;
        list.sort(this.compareByColumn(column));
        this.setState({list})
    }

    //Compare values in list.
    compareByColumn (column){
        return function (a,b){
            if (a[column] < b[column]) return -1;
            if (a[column] > b[column]) return 1;
            return 0;
        }
    }

    //Filter list on input from search bar.
    filterList () {
        var searchBar = document.getElementById("searchInput");
        var inputValue =searchBar.value.toUpperCase();
        var table = document.getElementById("restaurantTable");
        var row = table.getElementsByTagName("tr");
        var columnValue;

        for ( var i = 0; i < row.length; i++) {
            columnValue = row[i].getElementsByTagName("td")[0];
            if (columnValue) {
                if (columnValue.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
                    row[i].style.display = "";
                } else {
                    row[i].style.display = "none";
                }
            }
        }
    }

    render() {
        const list = this.state.list;

        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">
                        <h2>List of all restaurants</h2>
                    </a>
                </nav>
                <Container>
                    <form>
                        <fieldset className="rowLayout">
                            <input id="searchInput" type="text" className="form-control form-control-lg" placeholder="Search restaurant" onChange={this.filterList}/>
                        </fieldset>
                    </form>
                <Table hover id="restaurantTable" className="table">
                    <thead>
                    <tr>
                        <th className="columnPointer" onClick={() => this.sortList('name')} width="400">Name <arrow className="down"></arrow></th>
                        <th className="columnPointer" onClick={() => this.sortList('rating')} width="400">Rating <arrow className="down"></arrow></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {(list.length > 0) ? list.map(function(restaurant) {
                        return (
                            <tr key = {restaurant.id}>
                                <td>
                                    {restaurant.name}
                                </td>
                                <td>
                                    {restaurant.rating}
                                </td>
                                <td>
                                    <Link to={`/restaurant/${restaurant.id}`}>
                                        <Button
                                            variant='primary'>
                                            Select
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }) : <tr><td colSpan="5">Loading...</td></tr> }
                    </tbody>
                </Table>
                </Container>
            </div>
        );
    }
}

export default List;

