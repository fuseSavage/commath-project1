import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  Input,
} from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getDifferentiation } from "../functions/function";

function Differentiation() {

  const navigate = useNavigate();
  const [h, seth] = useState();
  const [p, setp] = useState();

  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      h: h,
      p: p

    };
    getDifferentiation(data).then((res) => {
      setresult(res)
    });
  };

  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="4"></Col>
        <Col sm="4">
          <div className="text-center">
            <h1>บทที่ 4</h1>
            <h2>Differentiation</h2>
          </div>


          <Card className="magin-class" style={{ alignItems: "center" }}>
            <div className="text-center">
              <h4>Ex : h = 0.64</h4>
              <h4>p = 2</h4>
            </div>
            <Row style={{ marginTop: "50px" }}>
              <Col></Col>
            </Row>

            <Row>
              <div className="text-center">
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>h:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={h}
                    onChange={(e) => seth(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>p:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={p}
                    onChange={(e) => setp(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
              </div>
            </Row>
            <Card className="magin-class">
              <h4 style={{ marginBottom: "10px" }}>Result: {result}</h4>
            </Card>

            <Button onClick={generate} color="danger">
              <div>
                <h3 >คำนวณ</h3>
              </div>
            </Button>
            <p></p>
            <Button onClick={back} color="link">
              <div>
                <h3>กลับ</h3>
              </div>
            </Button>
          </Card>
        </Col>

        <Col sm="4"></Col>
      </Row>
    </div>
  );
}
export default Differentiation;
