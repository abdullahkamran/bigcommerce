import React, { useEffect, useState } from 'react';

export const ProductBox = ({ product }) => {
  const [description, setDescription] = useState();
  const [image, setImage] = useState();


  useEffect(() => {
    const updateData = async () => {
      if (product && product.data) {
        setDescription(product.data.data);
        const response = await fetch(`https://cdn.builder.io/api/v1/proxy-api?url=https%3A%2F%2Fapi.bigcommerce.com%2Fstores%2Fczdeyt4zki%2Fv3%2Fcatalog%2Fproducts%2F${product.data.data.id}%2Fimages`, {
          headers: {
            'X-Auth-Client': 'q6zj5xdp03s8j5h5908o9wk7sh1f5jt',
            'X-Auth-Token': '9mo9rfanejpma13kpqf5hl1vu72cndz',
            'Content-Type': 'application/json',
            'Accept': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
          }
        });

        const data = await response.json();
        setImage(data.data[0].url_standard)
      }
    }
    updateData();
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
        <p>
          <b>Image: </b>
          {image ? <img src={`${image}`} alt={`${description ? description.name || "" : ""}`}/> : "" }
        </p>
      </div>
    </>
  );
}
