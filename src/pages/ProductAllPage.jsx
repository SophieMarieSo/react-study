import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router';

export default function ProductAllPage() {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, [query]);

  const getProducts = async () => {
    const searchQuery = query.get('q') || '';
    const resp = await axios.get(
      `https://my-json-server.typicode.com/SophieMarieSo/react-study/products?q=${searchQuery}`
    );
    setProductList(resp.data);
  };

  return (
    <Container className='all'>
      <Row>
        {productList.map((product, idx) => (
          <Col lg={3} md={6} sm={12}>
            <ProductCard key={idx} product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
