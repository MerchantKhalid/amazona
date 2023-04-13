import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const HomePageCard = ({ product }) => {
  const { name, image, slug, price, rating, description } = product;
  return (
    <div>
      <Card>
        <Link to={`/product/${slug}`}>
          <Card.Img variant="top" src={image} />
        </Link>
        <Card.Body>
          <Link to={`/product/${slug}`}>
            <Card.Title>{name} </Card.Title>
          </Link>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePageCard;
