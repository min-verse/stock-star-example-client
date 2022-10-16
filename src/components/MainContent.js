import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StockList from "./StockList";
import GenrePicker from "./GenrePicker";
import HomeMenuLinks from "./sidebars/HomeMenuLinks";
import NewsFeature from "./NewsFeature";
import NewsList from "./NewsList";
import StockPriceChart from "./StockPriceChart";

function MainContent() {

  const [articles, setArticles] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [featured, setFeatured] = useState({});
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/myportfolio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: 1 })
    })
      .then(res => res.json())
      .then((data) => {
        const dates = [];
        const prices = [];
        const ticker = data[0]['ticker'];
        data[0]['history'].map((item) => {
          dates.unshift(item.date);
          prices.unshift(item.price);
          return null;
        });
        setChartData({ ticker, dates, prices });
        setStocks(data);
      });
  }, [])

  useEffect(() => {
    fetch(`http://localhost:5000/news`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setArticles(data);
        console.log(data[0]);
        setFeatured(data[0]);
      });
  }, []);

  function handleClickFeatured(obj) {
    setFeatured(obj);
  }

  function handleClickChart(obj) {
    console.log(chartData);
    setChartData(obj);
  }

  return <main>
    {/* <GenrePicker /> */}
    <Container className="stock-container">
      
      <Row style={{padding:20}}>
        <Col xs={4}>
        <h2 className="section-headers">Your Tracked Stocks</h2>
          <StockList stocks={stocks} handleClickChart={handleClickChart} />
        </Col>
        <Col xs={8}>
          <StockPriceChart chartData={chartData} />
        </Col>
      </Row>
    </Container>
    <Container className="news-container">
      <Row style={{padding:20}}>
        <Col xs={8} >
        <h2 className="section-headers">Top Daily News</h2>
          <NewsFeature
            featured={featured}
          />
        </Col>
        <Col xs={4} style={{ overflow: 'hidden' }}>
          <NewsList
            articles={articles}
            handleClickFeatured={handleClickFeatured}
          />
        </Col>
      </Row>
    </Container>
  </main>;
}

export default MainContent;
