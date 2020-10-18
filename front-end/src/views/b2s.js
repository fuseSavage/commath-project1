import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Input,
} from "reactstrap";
import "../App.css";
import { getB2s } from "../functions/function";
import { useNavigate } from "react-router-dom";

function B2s() {

  const navigate = useNavigate();
  const [bit2string, setBit2string] = useState();
  const [result, setResult] = useState("");
  const generate = () => {
    getB2s(bit2string).then((res) => {
      setResult(res);
    });
  };

  const back = () => {
    navigate("/");
  };

  return (
    <div className="text-center">
      <Col className="container">
        <h1>บทที่ 1</h1>
        <h3>Basic Computing</h3>

        <Row>
          <Row className="col-md-3"></Row>
          <Col className="card col-md-6 magin-class">
            <div className="text-center">

              <h4 className="magin-class">Ex : 0111100000001111000111100</h4>
              <Input className="Input"
                value={bit2string}
                type="text"
                name="bit2string"
                id="bit2string"
                onChange={(e) => setBit2string(e.target.value)}
              />
              <h4 className="magin-class">ผลลัพธ์: {result}</h4>
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
            </div>
          </Col>
          <Row className="col-md-3"></Row>

        </Row>
      </Col>
    </div>
  );
}

export default B2s;
