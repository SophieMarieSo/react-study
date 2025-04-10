import {
  faTriangleExclamation,
  faHeart as fullHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Badge,
  Col,
  Container,
  Dropdown,
  Image,
  Row,
  Spinner,
} from 'react-bootstrap';
import { useParams } from 'react-router';

export default function ProductDetailPage() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [wishList, setWishList] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    setLoading(true);
    setError(false);

    try {
      const resp = await axios.get(
        `https://my-json-server.typicode.com/SophieMarieSo/react-study/products/${id}`
      );
      setProduct(resp.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
    }
  };

  return (
    <Container className='detail'>
      <Row>
        {error && (
          <Alert variant='danger'>
            <FontAwesomeIcon
              className='btn-icon'
              icon={faTriangleExclamation}
            />
            {errorMsg}
          </Alert>
        )}
        {loading ? (
          <Spinner className='loading' animation='border' variant='secondary' />
        ) : (
          <>
            <Col lg={5} sm={12}>
              <Image
                className='detail-img'
                src={product?.img}
                alt={`product-detail-img-${product?.id}`}
                fluid
                rounded
              />
            </Col>
            <Col lg={7} sm={12} className='mt-3'>
              <h4 className='title-section'>
                <div className='title-badge'>
                  <span>{product?.title} </span>
                  {product?.new ? (
                    <Badge className='new' bg='warning' text='dark' pill>
                      신제품
                    </Badge>
                  ) : (
                    ''
                  )}
                </div>
                <div
                  className='wishlist'
                  onClick={() => setWishList((prev) => !prev)}
                >
                  {wishList ? (
                    <FontAwesomeIcon icon={fullHeart} className='full-heart' />
                  ) : (
                    <FontAwesomeIcon icon={faHeart} />
                  )}
                </div>
              </h4>
              <h6 className='choice'>
                {product?.choice ? 'Conscious choice' : ''}
              </h6>
              <h4 className='price'>
                ₩ {product?.price?.toLocaleString('ko-KR')}
              </h4>
              <div className='click-section'>
                <Dropdown>
                  <Dropdown.Toggle variant='danger'>
                    사이즈 선택
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {product?.size?.map((s, idx) => (
                      <Dropdown.Item key={idx}>{s}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <div className='cart'>
                  <FontAwesomeIcon icon={faCartPlus} />
                </div>
              </div>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}
