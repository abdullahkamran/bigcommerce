import React, { useState, useEffect } from 'react';

export const ProductCollection = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
        fetch("https://api.bigcommerce.com/stores/c6ogmyu7tj/v3/catalog/products", {
            method: "GET",
            headers: {'X-Auth-Token': '5olebh6i2g4rp1vis2cuwaq69pr9jcc'}
        }).then(response => response.json())
        .then(data => setProducts(data))
        
        // const result = getCollection(collection);
        // setProducts(result.products);
    }, []);
  
    return (
        <div>
            {products.map((product, i) => (
                <h1 key={`product-${i}`}>
                    {product.name}
                </h1>
            ))}
        </div>
    );
}

