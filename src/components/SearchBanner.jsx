import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export default function SearchBanner() {
  return (
    <Container>
      <h1>코딩 알려주는 누나 도서관</h1>
      <Form className='d-flex'>
        <Form.Control
          type='search'
          placeholder='검색'
          className='me-2'
          aria-label='Search'
        />
        <Button variant='outline-success'>검색</Button>
      </Form>
    </Container>
  );
}
