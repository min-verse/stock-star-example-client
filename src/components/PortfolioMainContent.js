import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DoughnutChart from "./DoughnutChart";
import StockList from "./StockList";


function PortfolioMainContent() {

  const [stocks, setStocks] = useState([]);
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
        const tickers = [];
        const prices = [];
        data.map((item)=>{
          tickers.unshift(item['ticker']);
          prices.unshift(item['history'][0]['price']);
          return null;
        });
        console.log(data);
        console.log(tickers);
        setChartData({ tickers, prices });
        setStocks(data);
      });
  }, []);

  function handleClickChart(obj) {
    console.log(chartData);
    setChartData(obj);
  }

  return <main>

    <Container className="stock-container">
      
      <Row style={{padding:20}}>
        <Col xs={4}>
        <h2 className="section-headers">Your Portfolio</h2>
        <StockList stocks={stocks} handleClickChart={handleClickChart} />
        </Col>
        <Col xs={8}>
       <DoughnutChart chartData={chartData}/>
        </Col>
      </Row>
    </Container>
    <Container className="news-container">
      <Row style={{padding:20}}>
        <Col xs={8} >
        <p>sadsadasds</p>
        </Col>
        <Col xs={4} style={{ overflow: 'hidden' }}>
          <p>sadsadasds</p>
        </Col>
      </Row>
    </Container>
  </main>;
}

export default PortfolioMainContent;
