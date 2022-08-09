import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthButtons from './components/AuthButtons';
import './Footer.css';

class Header extends React.Component {
  render() {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand style={{color:'black'}}> My Favorite Books </Navbar.Brand>
          <NavItem ><Link to="/" className="nav-link" style={{color:'black'}} >Home &nbsp;</Link></NavItem>
          <NavItem ><Link to="/profile" className="nav-link"  style={{color:'black'}} >Profile&nbsp;&nbsp;</Link></NavItem>
          <NavItem ><Link to="/about" className="nav-link" style={{color:'black'}} >About&nbsp;&nbsp;</Link></NavItem>
          <NavItem ><br/> <AuthButtons /> </NavItem>
          {/* PLACEHOLDER: render a navigation link to the about page */}
        </Navbar>
        </div>


    )
  }
}

export default Header;