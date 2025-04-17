import React from 'react';
import { Container, Nav } from 'react-bootstrap';

export default function Navbar() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Brand href='#'>코딩알려주는 누나 도서관</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>메인</Nav.Link>
            <Nav.Link href='/favorite'>나의 책</Nav.Link>
            <Nav.Link href='/login'>로그인</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
