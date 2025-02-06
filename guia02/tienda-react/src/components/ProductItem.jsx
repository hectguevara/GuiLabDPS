import React from "react";

const ProductItem = ({ productId, productName, price, imageUrl }) => {
  return (
    <div className="product-item">
      <h3>{productName}</h3>
      <p>ID: {productId}</p>
      <img src={imageUrl} alt={productName} width="150" height="175" />
      <p>Precio: ${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductItem;