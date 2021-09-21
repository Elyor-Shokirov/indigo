import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar-style.scss";

const navbarComponent = () => {
  return (
    <div className="container-fluid">
      <Navbar className="brand_logo">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img src="../images/logo.png" alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className="call_center_all_second">
              <p className="call_center">Call Center</p>
              <p>(91) 111-11-30</p>
              <p>(90) 111-11-30</p>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default navbarComponent;
