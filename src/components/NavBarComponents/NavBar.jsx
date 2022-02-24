import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarText, NavItem, Nav } from 'reactstrap' ;
import logo  from './plotlineslogo.png';
import { Icon } from 'react-icons-kit';
import {ic_settings} from 'react-icons-kit/md/ic_settings';
import './NavBar.css';

export default class NavBar extends Component {
	render() {
		return (
	<div>
    <Navbar className="navbar-component" color="light" expand="md" light>
      <NavbarBrand className="logo" href="/">
        <img src = {logo} alt ='plotlineslogo'/>
      </NavbarBrand>
      <Nav className="me-auto" navbar >
        <NavItem>
          Data
        </NavItem>
      </Nav>
      <NavbarText>
        <Icon className ="settingsicon" icon={ic_settings} />
      </NavbarText>
    </Navbar>
  </div>
		);
	}
}


