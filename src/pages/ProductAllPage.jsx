import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router';
import NoData from '../components/NoData';

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
    setProductList([]);
  };

  return (
    <Container className='all'>
      <Row>
        {productList.length > 0 ? (
          productList.map((product, idx) => (
            <Col lg={3} md={6} sm={12}>
              <ProductCard key={idx} product={product} />
            </Col>
          ))
        ) : (
          <NoData />
        )}
      </Row>
    </Container>
  );
}
