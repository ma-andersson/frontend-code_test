import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Image, Row, Table} from "react-bootstrap";

class Restaurant extends Component {
    constructor(props){
        super(props);

        this.state = {
            restaurant: null
        }
    }

    // Fetch restaurant on first mount
    componentDidMount() {
        this.getRestaurant();
    }

    // Retrieve information about selected restaurant from API
    getRestaurant = () => {
        fetch(`/api/restaurant/${this.props.match.params.id}`)
            .then(res => res.json())
            .then((data) => {
                this.setState(() => ({restaurant: data}))
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        console.log(this.state.restaurant);
        const restaurant = this.state.restaurant;

        return (
            <div >
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">
                        <h3>Restaurant</h3>
                    </a>
                </nav>
                {restaurant != null &&
                <Container className = "App">
                        <Row className ="rowLayout">
                            <Image
                                style = {{width: 50, height: 50}}
                                src = {restaurant.icon}
                                thumbnail />

                            <h1>{restaurant.name}</h1>
                        </Row>
                    <Row>
                        <Col>
                            <Table className="tableLayout">
                                <tr>
                                    <td>Phone: </td>
                                    <td className="textBold">{restaurant.phone_number}</td>
                                </tr>
                                <tr>
                                    <td>Address: </td>
                                    <td>{restaurant.address}</td>
                                </tr>
                                <tr>
                                    <td>Website: </td>
                                    <td>{restaurant.website}</td>
                                </tr>
                                <tr>
                                    <td>Rating: </td>
                                    <td>{restaurant.rating}</td>
                                </tr>
                                <tr>
                                    <td>Price level: </td>
                                    <td>{restaurant.price_level}</td>
                                </tr>
                            </Table>
                            <Table className ="tableLayout">
                                <tr>
                                    <td>Opening hours: </td>
                                    {restaurant.opening_hours.map(hours =>
                                        <tr>{hours}</tr>
                                    )}
                                </tr>
                            </Table>
                        </Col>
                        <Col>
                            <div>
                                <Image
                                    src = {restaurant.photo}
                                    thumbnail />
                            </div>
                        </Col>
                    </Row>
                </Container>
                }
            </div>
        );
    }
}
export default Restaurant;