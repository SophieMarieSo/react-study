import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export default function LoginPage() {
  return (
    <Container className='login'>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3' controlId='id'>
          <Form.Control
            type='text'
            placeholder='아이디'
            autocomplete='off'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='pw'>
          <Form.Control type='password' placeholder='비밀번호오' required />
        </Form.Group>

        <Button variant='danger' type='submit'>
          로그인
        </Button>
      </Form>
    </Container>
  );
}
