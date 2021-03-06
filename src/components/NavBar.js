import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavLink, Nav, NavbarBrand } from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand tag={Link} to="/">VF</NavbarBrand>
      <Nav className="ml-auto">
        <NavItem>
          <NavLink tag={Link} to="/about">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/contact">Contact Me</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavBar
