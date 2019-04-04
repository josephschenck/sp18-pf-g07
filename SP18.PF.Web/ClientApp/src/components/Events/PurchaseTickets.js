﻿import React from "react";
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";
import { Events } from "./Events";

export default class PurchaseTickets extends React.Component {
    //<Table.Cell><Button><Link to={`/buytickets/${events.id}`}>Purchase Tickets</Link></Button></Table.Cell>
    //import PurchaseTickets from './components/Events/PurchaseTickets';
    //<Route path='/buytickets' component={PurchaseTickets} />
    displayName = "Buy Tickets";

    constructor(props) {
        super(props);
        this.state = {
            orderNum: this.props, loading: true, order: { eventId: "", tour: "", venue: "", price: "" }};

        console.log(this.props);
        //console.log(Events.props.match.params.searchTerm);

        //fetch('api/events?SearchTerm=' + this.props.match.params.searchTerm)
        //    .then(response => response.json())
        //    .then(data => {
        //        this.setState({ orderNum: data, loading: false });
        //         console.log(data);
        //    });
        //fetch('api/tickets/purchase/{eventId}')
        fetch('api/tickets/purchase/' + this.props.match.params.searchTerm)

            .then(response => response.json())
            .then(data => {
                this.setState({ orderNum: data, loading: false });
            });
    }

    render() {
        const { orderNum } = this.state;

        return (
            <form
                onSubmit={orderNum => {
                    orderNum.preventDefault();
                    orderNum.target.reset();
                    this.setState({
                        order: {
                            eventId: ""
                        }

                    });
                }}
            >
                <Prompt
                />



                <p>
                    <input
                        size="50"
                        placeholder="type something here"
                        onChange={event => {
                            this.setState({

                            });
                        }}
                    />
                    
                </p>

                <p>
                    <button>BUY NOW</button>
                </p>
            </form>
        );
    }
}