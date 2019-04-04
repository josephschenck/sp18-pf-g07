import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Venues } from './components/VenueCards/Venues';
import { Venue } from './components/VenueCards/Venue';
import { Tours } from './components/TourCards/Tours';
import { Tour } from './components/TourCards/Tour';
import { Events } from './components/Events/Events';
import { Event } from './components/Events/Event';
import { Ticket } from './components/Tickets/Ticket';
import { Profile } from './components/Profile';
import axios from 'axios';
import Login from './components/Users/Login';
import Register from './components/Users/Register';
import Logout from './components/Users/Logout';
import { EditProfile } from './components/EditProfile';



export default class App extends Component {
    displayName = App.name

    constructor() {
        super();
        this.state = {
            user: null
        }

        this.setAppUserState = this.setAppUserState.bind(this);

    }

    componentDidMount() {
        console.log("Component Mounted.");

        axios.get('api/users/')
            .then(response =>{
                console.log("axios")
                this.setAppUserState(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    setAppUserState(appUser) {
        this.setState({ user: appUser });
        console.log(this.state.user);
        console.log("state set");
    }


  render() {
    return (
        <Layout foo={this.state.user}>
        <Route exact path='/' component={Home} />
        <Route exact path='/venues' component={Venues} />
        <Route path='/venues/:venueId' component={Venue} />
        <Route exact path='/tours' component={Tours}/>
        <Route path= '/tours/:tourId' component={Tour}/>
        <Route exact path='/events' component={Events} />
        <Route exact path='/tickets' component={Ticket} />
        <Route path='/profile' render={() => <Profile user={ this.state.user} /> }/>
        <Route path='/events/:searchTerm' component={Event} />
        <Route path='/login' render={() => <Login setAppUserState={this.setAppUserState} user={this.state.user} />} />
        <Route path='/register' render={(user) => <Register setAppUserState={this.setAppUserState} user={this.state.user} />} />
        <Route path='/logout' component={Logout} />        
        <Route path='/editProfile' render={() => <EditProfile user={this.state.user} />} />

        
      </Layout>
        );
    }
}
