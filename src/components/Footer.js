import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer px-0 px-lg-3">
      <Container fluid>
        <nav>
          <p className="copyright text-center">
            © {new Date().getFullYear()} by KerjaYuk!
          </p>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
