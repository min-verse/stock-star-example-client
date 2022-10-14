import React from "react";
import TopMenu from "../TopMenu";
import SideMenu from "../SideMenu";
import GenrePicker from "../GenrePicker";
import StockList from "../StockList";
import MainContent from "../MainContent";

function HomePage() {
  return (<div className="app-container">
  
  <TopMenu />
  <MainContent />
  <SideMenu />
  
  </div>);
}

export default HomePage;
