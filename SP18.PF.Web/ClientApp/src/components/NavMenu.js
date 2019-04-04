import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>SP18.PF.G07</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={'/'} exact>
                <NavItem>
                  <Glyphicon glyph='home' /> Home
                </NavItem>
              </LinkContainer>
              <LinkContainer to={'/venues'}>
                <NavItem>
                  <Glyphicon glyph='globe' /> Venues
                </NavItem>
              </LinkContainer>
              <LinkContainer to={'/tours'}>
                <NavItem>
                  <Glyphicon glyph='music' /> Tours
                </NavItem>
              </LinkContainer>
              <LinkContainer to={'/events'}>
                <NavItem>
                  <Glyphicon glyph='calendar' /> Events
                </NavItem>
              </LinkContainer>
              

            </Nav>
            <Nav pullRight>
                    {
                        !this.props.user &&
                        <LinkContainer to={'/login'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Login
                            </NavItem>
                        </LinkContainer>
                    }

                    {
                        !this.props.user &&
                        <LinkContainer to={'/register'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Register
                            </NavItem>
                        </LinkContainer>
                    }

                    {
                        this.props.user &&
                        <LinkContainer to={'/logout'}>
                            <NavItem>
                                <Glyphicon glyph='calendar' /> Logout
                            </NavItem>
                        </LinkContainer>

                    }
                    {
                        this.props.user &&
                        <NavDropdown eventKey={1} title="User Account" >

                            <LinkContainer to={'/tickets'}>
                                <MenuItem eventKey={1.2}><Glyphicon glyph='tags' /> Tickets Purchased</MenuItem>
                            </LinkContainer>

                            <LinkContainer to={'/profile'}>
                                <MenuItem eventKey={1.2}><Glyphicon glyph='tags' /> Profile</MenuItem>
                            </LinkContainer>

                        </NavDropdown>
                    }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}
