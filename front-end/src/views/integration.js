import React, { useState } from "react";
import {
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getIntegration } from "../functions/function";

function Integration() {

  const navigate = useNavigate();

  const [result, setresult] = useState();
  const [a, seta] = useState();
  const [b, setb] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      a: a,
      b: b,
    };
    getIntegration(data).then((res) => {
      setresult(res);
    });
  };
  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="4"></Col>
        <Col sm="4">
          <div className="text-center">
            <h1>บทที่ 5</h1>
            <h2>Integration</h2>
          </div>


          <Card className="magin-class" style={{ alignItems: "center" }}>
            <div className="text-center">
              <h4>exam:</h4>
              <h4>a = 0</h4>
              <h4>b = 3</h4>
            </div>
            <Row style={{ marginTop: "50px" }}>
              <Col></Col>
            </Row>

            <Row>
              <div className="text-center">
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>a:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={a}
                    onChange={(e) => seta(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>b:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={b}
                    onChange={(e) => setb(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
              </div>
            </Row>
            <h4 style={{ marginBottom: "10px" }}>Result: {result}</h4>

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
export default Integration