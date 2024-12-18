import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slice/Product/productSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '10px' }}>
      <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
      <h5>{product.title}</h5>
      <p>Price: ${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}
