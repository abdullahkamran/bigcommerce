import React, { useEffect, useState } from 'react';

export const ProductBox = ({ product }) => {
  const [description, setDescription] = useState();
  useEffect(() => {
    if(product && product.data) {
      setDescription(product.data.data)  
    }
    //setDescription(product ? product.data ? product.data.data ? product.data.data : {} : {} : {})
  }, [product])
  return (
    <>
      <div>
        <p>
          <b>Name: </b>
          {description ? description.name || "" : ""}
        </p>
        <p>
          <b>Description: </b>
          {description ? description.description || "" : ""}
        </p>
        <p>
          <b>Availability: </b>
          {description ? description.availability || "" : ""}
        </p>
        <p>
          <b>Price: </b>
          {description ? description.price || "" : ""}
        </p>
      </div>
    </>
  );
}
