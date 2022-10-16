import React from "react";
import Card from 'react-bootstrap/Card';


function StockListing({ ticker, name, history, handleClickChart }) {

  function handleClick() {
    const dates = [];
    const prices = [];
    history.map((item) => {
      dates.unshift(item.date);
      prices.unshift(item.price);
      return null;
    });
    handleClickChart({ticker, dates, prices});
  }
  return (
    <div onClick={handleClick} className="card">
      <p>{ticker} <span style={{ marginRight: 0 }}>{history[0]['price']}</span></p>
    </div>
  );
}

export default StockListing;
