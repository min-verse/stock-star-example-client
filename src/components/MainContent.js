import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StockList from "./StockList";
import GenrePicker from "./GenrePicker";
import MenuLinks from "./MenuLinks";
import StockPriceChart from "./StockPriceChart";

function MainContent() {
  return <main>
    {/* <GenrePicker /> */}
    <Container className="stock-container">
      <Row>
        <Col xs={4}>
          <StockList />
        </Col>
        <Col xs={8}>
          <StockPriceChart />
        </Col>
      </Row>
    </Container>
    <Container className="stock-container">
      <Row>
        <Col xs={8}>
        <StockPriceChart />
        </Col>
        <Col xs={4}>
        <StockList />
          
        </Col>
      </Row>
    </Container>
  </main>;
}

export default MainContent;
