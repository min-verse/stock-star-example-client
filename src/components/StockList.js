import React from "react";
import StockListing from "./StockListing";

function StockList({stocks, handleClickChart}) {
  return (
    <>
    <ul>
      {stocks.map((item) => {
        return (<StockListing
        key={item.id}
        ticker={item.ticker}
        name={item.name}
        history={item.history}
        handleClickChart={handleClickChart}
        />);
      })}
      </ul>
    </>
  );
}

export default StockList;
