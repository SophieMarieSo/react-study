import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import axios from 'axios';
import BookCard from '../components/BookCard';

export default function MainPage() {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    setLoading(true);
    setError(false);

    try {
      const resp = await axios.get(`https://openlibrary.org/search.json`);
      setBookList(resp.data.docs);
      setLoading(false);
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
    }
  };
  return (
    <Container>
      {error && (
        <Alert variant='danger'>
          <FontAwesomeIcon className='btn-icon' icon={faTriangleExclamation} />
          {errorMsg}
        </Alert>
      )}
      {loading ? (
        <Spinner className='loading' animation='border' variant='warning' />
      ) : (
        <>
          {setBookList.length > 0 ? (
            bookList.map((book, idx) => <BookCard key={idx} book={book} />)
          ) : (
            <Alert variant='primary'>
              <FontAwesomeIcon className='btn-icon' icon={faMagnifyingGlass} />
              No Data Founded
            </Alert>
          )}
        </>
      )}
    </Container>
  );
}
