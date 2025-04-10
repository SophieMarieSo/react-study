import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router';

export default function ProductAllPage() {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getProducts();
  }, [query]);

  const getProducts = async () => {
    setLoading(true);
    setError(false);

    try {
      const searchQuery = query.get('q') || '';
      const resp = await axios.get(
        `https://my-json-server.typicode.com/SophieMarieSo/react-study/products?q=${searchQuery}`
      );
      setProductList(resp.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
    }
  };

  return (
    <Container className='all'>
      <Row>
        {error && (
          <Alert className='error' variant='danger'>
            {errorMsg}
          </Alert>
        )}
        {loading ? (
          <Spinner className='loading' animation='border' variant='secondary' />
        ) : (
          <>
            {productList.map((product, idx) => (
              <Col lg={3} md={6} sm={12}>
                <ProductCard key={idx} product={product} />
              </Col>
            ))}
          </>
        )}
      </Row>
    </Container>
  );
}
