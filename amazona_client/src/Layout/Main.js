import React from 'react';
import Header from '../Shared/Header.js';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Shared/Footer';
import { Container } from 'react-bootstrap';

const Main = () => {
  return (
    <div>
      <Header />
      <Container className="mt-3 foot">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
