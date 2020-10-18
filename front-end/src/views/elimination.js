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
import { getElimination } from "../functions/function";

function Elimination() {
  const navigate = useNavigate();
  const [a00, seta00] = useState();
  const [a01, seta01] = useState();
  const [a02, seta02] = useState();
  const [a10, seta10] = useState();
  const [a11, seta11] = useState();
  const [a12, seta12] = useState();
  const [a20, seta20] = useState();
  const [a21, seta21] = useState();
  const [a22, seta22] = useState();

  const [b1, setb1] = useState();
  const [b2, setb2] = useState();
  const [b3, setb3] = useState();

  const [x0, setx0] = useState();
  const [x1, setx1] = useState();
  const [x2, setx2] = useState();


  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      A: [[a00, a01, a02], [a10, a11, a12], [a20, a21, a22]],
      b: [b1, b2, b3]

    };
    getElimination(data).then((res) => {
      setx0(res[0])
      setx1(res[1])
      setx2(res[2])
    });
  };

  return (
    <div className="text-center">
      <h1>บทที่ 2</h1>
      <h3>Systems of Linear Algebraic Equations</h3>
      <Row>
        <Row className="col-md-3"></Row>
        <Col className="card col-md-6 magin-class">
          <h4 className="magin-class" >Ex : A = [ [ 6 -4 1 ], [ -4 6 -4 ], [ 1 -4 6 ] ] <br></br><br></br> B = [ -14 36 16 ]</h4>
          <Row className="card">
            <Row>
              <Col>
                <h3>A =</h3>
                <Row>
                  <Row className="col-sm-4"></Row>
                  <Row className="col-sm-6">
                    <Input className="set-box"
                      style={{ width: 100 }}
                      value={a00}
                      type="text"
                      name="bit2string"
                      id="bit2string"
                      onChange={(e) => seta00(e.target.value)}
                    />
                    <Input className="set-box"
                      style={{ width: 100 }}
                      value={a01}
                      type="text"
                      name="bit2string"
                      id="bit2string"
                      onChange={(e) => seta01(e.target.value)}
                    />
                    <Input className="set-box"
                      style={{ width: 100 }}
                      value={a02}
                      type="text"
                      name="bit2string"
                      id="bit2string"
                      onChange={(e) => seta02(e.target.value)}
                    />
                  </Row>
                  <Row className="col-sm-2"></Row>

                  <Row className="col-sm-4"></Row>
                  <Row className="col-sm-6">
                    <Input className="set-box"
                      style={{ width: 100 }}
                      value={a10}
                      type="text"
                      name="bit2string"
                      id="bit2string"
                      onChange={(e) => seta10(e.target.value)}
                    />
                    <Input className="set-box"
                      style={{ width: 100 }}
                      value={a11}
                      type="text"
                      name="bit2string"
                      id="bit2string"
                      onChange={(e) => seta11(e.target.value)}
                    />
                    <Input className="set-box"
                      style={{ width: 100 }}
                      value={a12}
                      type="text"
                      name="bit2string"
                      id="bit2string"
                      onChange={(e) => seta12(e.target.value)}
                    />
                  </Row>
                  <Row className="col-sm-2"></Row>

                  <Row className="col-sm-4"></Row>
                  <Row className="col-sm-6">
                    <Input className="set-box"
                      style={{ width: 100 }}
                      value={a20}
                      type="text"
                      name="bit2string"
                      id="bit2string"
                      onChange={(e) => seta20(e.target.value)}
                    />
                    <Input className="set-box"
                      style={{ width: 100 }}
                      value={a21}
                      type="text"
                      name="bit2string"
                      id="bit2string"
                      onChange={(e) => seta21(e.target.value)}
                    />
                    <Input className="set-box"
                      style={{ width: 100 }}
                      value={a22}
                      type="text"
                      name="bit2string"
                      id="bit2string"
                      onChange={(e) => seta22(e.target.value)}
                    />
                  </Row>
                  <Row className="col-sm-2"></Row>

                </Row>


              </Col>
            </Row>
            <Col>
              <h3>B =</h3>
              <Row>
                <Row className="col-sm-4"></Row>
                <Row className="col-sm-6">
                  <Input className="set-box"
                    style={{ marginBottom: "20px", width: 100 }}
                    value={b1}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => setb1(e.target.value)}
                  />
                  <Input className="set-box"
                    style={{ marginBottom: "20px", width: 100 }}
                    value={b2}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => setb2(e.target.value)}
                  />
                  <Input className="set-box"
                    style={{ marginBottom: "20px", width: 100 }}
                    value={b3}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => setb3(e.target.value)}
                  />
                </Row>
                <Row className="col-sm-2"></Row>
              </Row>
              <h4 style={{ marginBottom: "10px" }}>x0: {x0}</h4>
              <h4 style={{ marginBottom: "10px" }}>x1: {x1}</h4>
              <h4 style={{ marginBottom: "10px" }}>x2: {x2}</h4>
              <Row style={{ marginBottom: "30px" }}></Row>
            </Col>
          </Row>
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

        </Col>
        <Row className="col-md-3"></Row>
      </Row>
    </div>
  );
}
export default Elimination;
