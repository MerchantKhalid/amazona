import React, { useEffect, useReducer, useState } from 'react';
import data from '../../data.js';
import HomePageCard from '../HomaPageCard/HomePageCard.js';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import Loading from '../../Shared/Loading.js';
import MessageBox from '../../Shared/MessageBox.js';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  // const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Amazona</title>
      </Helmet>
      <h2 className="mt-5">Featured Products</h2>

      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant="danger">{error} </MessageBox>
      ) : (
        <Row>
          {products.map((pd) => (
            <Col key={pd.slug} sm={6} md={4} lg={3} className="mb-3">
              <HomePageCard product={pd}></HomePageCard>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Home;
