import React from "react";
import { Nav, NavItem } from "reactstrap";
import { Link } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Nav className="nav">
                <Link id="names" to="/">
                  <b>AhrorShoH</b>
                </Link>
                <NavItem>
                  <Link active to="/blog" id="blog">
                    Blog
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/portfolio" id="portfolio">
                    Portfolio
                  </Link>
                </NavItem>
                <NavItem>
                    <Link className="about" to="/about">About</Link>
                </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}
export default Navbar;
