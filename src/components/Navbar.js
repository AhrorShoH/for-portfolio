import React from "react";
import { Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";

import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Nav className="nav">
                <NavbarBrand id="names" href="#">
                  <b>AhrorShoH</b>
                </NavbarBrand>
                <NavItem>
                  <NavLink active href="#" id="blog">
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" id="portfolio">
                    Portfolio
                  </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="about" href="#">About</NavLink>
                </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}
export default Navbar;
