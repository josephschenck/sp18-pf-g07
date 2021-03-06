import React, { Component } from 'react';
import { Col, Grid, Row, Jumbotron } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export class Layout extends Component {
  displayName = Layout.name

  render() {

    console.log(this.props)

    return (
      <Grid fluid>
        <Row>
          <Col>
              <NavMenu user={this.props.foo}/>
          </Col>
        </Row>
        
        <Row>
          <Col>
            {this.props.children}
          </Col>
        </Row>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>

      </Grid>
    );
  }
}
