import React from 'react';
import { Badge, Image } from 'react-bootstrap';

export default function ProductCard({ product }) {
  return (
    <div className='product-card'>
      <Image
        className='product-img'
        src={product?.img}
        alt={`product-img-${product?.id}`}
        fluid
        rounded
      />
      <h6 className='choice'>{product?.choice ? 'Conscious choice' : ''}</h6>
      <h6 className='title'>
        <span>{product?.title} </span>
        {product?.new ? (
          <Badge bg='warning' text='dark' pill>
            신제품
          </Badge>
        ) : (
          ''
        )}
      </h6>
      <span className='price'>₩ {product?.price.toLocaleString('ko-KR')}</span>
    </div>
  );
}
