import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const HomePageCard = ({ product }) => {
  const { name, image, slug, price, rating, numReviews, description } = product;
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
          <Rating
            product={product}
            rating={rating}
            numReviews={numReviews}
          ></Rating>
          <Card.Text>{description}</Card.Text>
          <Button variant="warning">Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePageCard;
