import React from "react";
import { Nav, NavItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Nav className="nav">
            <Link id="names" to="/">
              <b>Ahrorbek</b>
            </Link>
            <NavItem>
              <Link className="about" to="/about">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/portfolio" id="portfolio">
                Projects
              </Link>
            </NavItem>
            <NavItem>
              <Link active to="/blog" id="blog">
                Blog
              </Link>
            </NavItem>
          <div>
            <Button id="resume">Resume</Button>
          </div>          
          </Nav>
        </div>
      </div>
    );
  }
}
export default Navbar;
