import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Container, Nav, Dropdown, Button } from 'react-bootstrap';

import routes from 'routes.js';

const Navbars = () => {
  const location = useLocation();

  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle('nav-open');
    var node = document.createElement('div');
    node.id = 'bodyClick';
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle('nav-open');
    };
    document.body.appendChild(node);
  };

  const getPageTitle = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return 'Welcome';
  };

  return (
    <Navbar sticky="top" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="danger"
            className="d-lg-none d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </Button>
          <Navbar.Brand
            href=" "
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getPageTitle()}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                data-toggle="dropdown"
                id="dropdown-67443507"
                variant="default"
                className="m-0"
              >
                <span>Notification</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#" onClick={(e) => e.preventDefault()}>
                  Reimbursement
                </Dropdown.Item>
                <Dropdown.Item href="#" onClick={(e) => e.preventDefault()}>
                  Sickness
                </Dropdown.Item>
                <Dropdown.Item href="#" onClick={(e) => e.preventDefault()}>
                  Overtime
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav className="ml-auto" navbar>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <span className="no-icon">Account</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <span className="no-icon">Log out</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
