import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ title, description, price, image }) {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={image} alt={title} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
          <p className="card-text">Price: {price}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
     
      <div className="row">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Product;