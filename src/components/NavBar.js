import React form 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavLink, Nav } from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar>
      <Nav className="nav">
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
