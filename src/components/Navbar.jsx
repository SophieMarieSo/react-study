import React from 'react';
import { Container, Nav, Navbar as RNavbar } from 'react-bootstrap';

export default function Navbar() {
  return (
    <RNavbar expand='lg' className='bg-body-tertiary'>
      <Container fluid>
        <RNavbar.Brand href='#'>코딩알려주는 누나 도서관</RNavbar.Brand>
        <RNavbar.Toggle aria-controls='navbarScroll' />
        <RNavbar.Collapse id='navbarScroll'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>메인</Nav.Link>
            <Nav.Link href='/favorite'>나의 책</Nav.Link>
            <Nav.Link href='/login'>로그인</Nav.Link>
          </Nav>
        </RNavbar.Collapse>
      </Container>
    </RNavbar>
  );
}
