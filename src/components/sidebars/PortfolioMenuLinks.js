import React from "react";
import { Link } from "react-router-dom";

function PortfolioMenuLinks() {
  return (
    <div className="side-menu">
      <ul>
      <Link to="/">
        <li>
          <span role="img" aria-label="home">
            🏚
          </span>
          Home
        </li>
        </Link>
        <Link to="/portfolio">
        <li className="active">
          <span role="img" aria-label="heart">
            🗀
          </span>
          My Portfolio
        </li>
        </Link>
        <li>
          <span role="img" aria-label="plus">
            ➕
          </span>
          Placeholder
        </li>
      </ul>
    </div>
  );
}

export default PortfolioMenuLinks;
