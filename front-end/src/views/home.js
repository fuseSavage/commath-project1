import React from 'react';
import { CardTitle, CardText, Col, Button, Card } from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/" + page);
  }

  return (
    <div className="text-center bg-color">
      <h1>Project Computational Mathematics</h1>
      <div className="text-center">
        <h2>1144311 Computational Mathematics</h2>
        <a href=" https://wichit2s.gitlab.io/commath/01-Basic-Computing/index.html#">Click to open course material.</a>
      </div>
      <div className="box-centers">
        <Col>
          <Card className="margin-top">
            <CardTitle>
              <h3 style={{ marginTop: "10px" }}>บทที่ 1</h3>
            </CardTitle>
            <CardText>
              <h4>Basic Computing</h4>
            </CardText>
            <Button className="btn-style" onClick={() => { nextPage("b2s") }} color="danger">
              <h5 style={{ marginTop: "10px" }}>Start</h5>
            </Button>
          </Card>
        </Col>

        <Col>
          <Card className="margin-top">
            <CardTitle>
              <h3 style={{ marginTop: "10px" }}>บทที่ 2</h3>
            </CardTitle>
            <CardText>
              <h4>Systems of Linear Algebraic Equations</h4>
            </CardText>
            <Button className="btn-style" onClick={() => { nextPage("elimination") }} color="primary">
              <h5 style={{ marginTop: "10px" }}>Start</h5>
            </Button>
          </Card>
        </Col>

        <Col>
          <Card className="margin-top">
            <CardTitle>
              <h3 style={{ marginTop: "10px" }}>บทที่ 3</h3>
            </CardTitle>
            <CardText>
              <h4>Interpolation & Curve fitting</h4>
            </CardText>
            <Button className="btn-style" onClick={() => { nextPage("interpolation") }} color="warning">
              <h5 style={{ marginTop: "10px" }}>Start</h5>
            </Button>
          </Card>
        </Col>

        <Col>
          <Card className="margin-top">
            <CardTitle>
              <h3 style={{ marginTop: "10px" }}>บทที่ 4</h3>
            </CardTitle>
            <CardText>
              <h4>Differentiation</h4>
            </CardText>
            <Button className="btn-style" onClick={() => { nextPage("differentiation") }} color="success">
              <h5 style={{ marginTop: "10px" }}>Start</h5>
            </Button>
          </Card>
        </Col>

        <Col>
          <Card className="margin-top">
            <CardTitle>
              <h3 style={{ marginTop: "10px" }}>บทที่ 5</h3>
            </CardTitle>
            <CardText>
              <h4>Integration</h4>
            </CardText>
            <Button className="btn-style" onClick={() => { nextPage("integration") }} color="secondary">
              <h5 style={{ marginTop: "10px" }}>Start</h5>
            </Button>
          </Card>
        </Col>

        <Col>
          <Card className="margin-top margin-buttom">
            <CardTitle>
              <h3 style={{ marginTop: "10px" }}>บทที่ 6</h3>
            </CardTitle>
            <CardText>
              <h4>Root-finding</h4>
            </CardText>
            <Button className="btn-style" onClick={() => { nextPage("root-finding") }} color="info" >
              <h5 style={{ marginTop: "10px" }}>Start</h5>
            </Button>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default Home;


