import React from "react";
import GenrePicker from "./GenrePicker";
import StockList from "./StockList";
import { Link } from "react-router-dom";

function TopMenu() {
  return (
    <nav className="menu">
      <ul className="uf">
        <li><button>
          <span className="profile-logo" role="img" aria-label="user">
            👤
          </span>
          <span className="profile-menu">username</span>
        </button><ul>
                        <li><Link to="/">Edit Profile</Link></li>
                        <li><a href="#">Log Out</a></li>
                    </ul></li>
      </ul>
    </nav>
  );
}

export default TopMenu;
