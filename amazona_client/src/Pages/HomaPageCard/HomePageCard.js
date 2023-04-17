import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { Store } from '../../Context/Store';

const HomePageCard = ({ product }) => {
  const { name, image, slug, price, rating, numReviews, description } = product;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItems = cartItems.find((x) => x._id === product._id);
    const quantity = existItems ? existItems.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry this product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

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
          {product.countInStock === 0 ? (
            <Button disabled variant="light">
              Out of stock
            </Button>
          ) : (
            <Button onClick={() => addToCartHandler(product)} variant="warning">
              Add To Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePageCard;
