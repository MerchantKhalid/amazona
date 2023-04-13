import React from 'react';
import data from '../../data.js';
import HomePageCard from '../HomaPageCard/HomePageCard.js';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      <h2>Featured Products</h2>
      <Container>
        <Row>
          <Col xs={4} sm={6} lg={4}>
            {data.products.map((pd) => (
              <HomePageCard key={pd.slug} product={pd}></HomePageCard>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
