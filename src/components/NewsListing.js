import React from "react";
import Card from 'react-bootstrap/Card';


function NewsListing({ article, handleClickFeatured }) {
  const { headline, url, source } = article;
  function handleClick() {
    handleClickFeatured(article);
  }
  return (
    <div onClick={handleClick} className="news-card">
      <h6>{headline}</h6>
      <small>Source: {source}</small>
    </div>
  );
}

export default NewsListing;
