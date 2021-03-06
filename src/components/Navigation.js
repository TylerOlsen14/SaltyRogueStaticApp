import React, { Component } from 'react';
import '../App.css';
import logo from '../assets/logo.jpg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
  } from 'reactstrap';

  export default class Navigation extends React.Component {    constructor(props){
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="Salty Rogue Real Estate" style={{width: 75, height: 75}} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Properties
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="NavLink">
                  <Button color="info" size="lg" block>
                      <NavLink style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}} href="Properties/EmmaStreet">Emma Street</NavLink>
                    </Button>
                  </DropdownItem>
                  <DropdownItem>
                    <Button color="info" size="lg" block>
                      <NavLink href="Properties/LaurelStreet">Laurel Street</NavLink>
                    </Button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
