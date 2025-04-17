import React from 'react';
import { Card } from 'react-bootstrap';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BookCard({ book }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img img-fluid variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>{book?.title}</Card.Title>
        <Card.Text>{book?.author_name}</Card.Text>
        <FontAwesomeIcon icon={faHeart} />
      </Card.Body>
    </Card>
  );
}
