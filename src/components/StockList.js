import React from "react";
import StockListing from "./StockListing";
import { stocks } from "../data/stocks";

function StockList() {
  return (
    <>
    <ul>
      {stocks.map((item) => {
        return (<StockListing
        key={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        />);
      })}
      </ul>
    </>
  );
}

export default StockList;
