import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

// "use-reducer-logger": "^1.0.2",

const Header = () => {
  return (
    <div className="d-flex flex-column site-container">
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Amazona</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
