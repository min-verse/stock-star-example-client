import React from "react";
import Card from 'react-bootstrap/Card';


function StockListing({ name, image, price }) {
  return (
    <div className="card">
     <p>{name} <span style={{marginRight:0}}>{price}</span></p>
    </div>
  );
}

export default StockListing;
