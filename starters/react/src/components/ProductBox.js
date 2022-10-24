import React, { useEffect } from 'react';

export const ProductBox = ({ product }) => {
  useEffect(() => {
    console.log(product)
  }, [product])
  return (
    <>
      <div>
        <p>
          <b>Name: </b>
          {product.data.data.name}
        </p>
        <p>
          <b>Description: </b>
          {product.data.data.description}
        </p>
        <p>
          <b>Availability: </b>
          {product.data.data.availability}
        </p>
        <p>
          <b>Price: </b>
          {product.data.data.price}
        </p>
      </div>
    </>
  );
}
