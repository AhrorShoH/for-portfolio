import React from "react";
import "./blog.css";
import Navbar from "../components/Navbar";

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="blog">
          <h3 id="text">
            <h3 id="caption">Programming.</h3><br/> Programming is the process of creating, testing, and
            modifying programs for computers and other microprocessor-based
            electronic machines. People who create software are called
            Developers. There are different fields of programming such as Mobile
            Programming, Front End Programming, Back End Programming, Artificial
            Intelligence etc.
          </h3>
        </div>
      </div>
    );
  }
}

export default Blog;
