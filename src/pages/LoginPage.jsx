import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function LoginPage({ setAuthenticate }) {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setAuthenticate((prev) => !prev);
    navigate('/');
  };

  return (
    <Container className='login'>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3' controlId='id'>
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type='text'
            placeholder='아이디를 입력하시오'
            autocomplete='off'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='pw'>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type='password' placeholder='비밀번호를 입력하시오' />
        </Form.Group>

        <Button variant='danger' type='submit'>
          로그인
        </Button>
      </Form>
    </Container>
  );
}
