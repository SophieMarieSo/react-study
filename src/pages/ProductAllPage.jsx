import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

export default function ProductAllPage() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const resp = await axios.get(
      'https://my-json-server.typicode.com/SophieMarieSo/react-study/products'
    );
    setProductList(resp.data);
  };

  return (
    <Container>
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
