import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Home extends Component {
    displayName = Home.name
  

  render() {
    return (
        <div className="container fill">
            <br></br>
            <Carousel>
                <Carousel.Item>
                    <img className="fill" src="/carousel.png" src="https://image.ibb.co/iKUQEn/jt1.jpg" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="fill" src="/carousel.png" src="https://image.ibb.co/hp87S7/td2.jpg" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="fill" src="/carousel.png" src="https://image.ibb.co/k8CZ77/jt3.jpg"/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div class="grid-container-home">
                <div class="item1">
                    <img src="https://image.ibb.co/jUpgxH/jointhecrowd.png" width="1100"></img>
                </div>
                <div class="item2">
                    <img src="http://assets.capitalfm.com/2017/26/ed-sheeran-uk-stadium-tour-1498570269.jpg" width="500"></img>
                </div>
                <div class="item3">
                    <h3>Interested in Upcoming Events?</h3>
                    <h4>Get your Tickets Here!</h4>
                    <p><Link to={'/register'}>Register </Link>with us!</p>
                    <p>Already have an account? <Link to={'/login'}>Login!</Link></p>
                    <br></br>
                    <img src="https://movieplayer.net-cdn.it/images/2016/06/16/clfe3xbusaaktow.jpg" width="500"></img>
                </div>  
            </div>
        </div>        
    );
  }
}