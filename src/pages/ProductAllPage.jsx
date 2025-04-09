import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
    <div>
      <h1>Product All Page</h1>
    </div>
  );
}
