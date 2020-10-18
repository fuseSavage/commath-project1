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
import { getInterpolation } from "../functions/function";

function Interpolation() {


  const navigate = useNavigate();
  const [x, setx] = useState();
  const [xi1, setxi1] = useState();
  const [xi2, setxi2] = useState();
  const [xi3, setxi3] = useState();
  const [xi4, setxi4] = useState();
  const [xi5, setxi5] = useState();
  const [xi6, setxi6] = useState();
  const [yi1, setyi1] = useState();
  const [yi2, setyi2] = useState();
  const [yi3, setyi3] = useState();
  const [yi4, setyi4] = useState();
  const [yi5, setyi5] = useState();
  const [yi6, setyi6] = useState();

  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      x: x,
      xi: [xi1, xi2, xi3, xi4, xi5, xi6],
      yi: [yi1, yi2, yi3, yi4, yi5, yi6]

    };
    getInterpolation(data).then((res) => {
      setresult(`วินาทีที่ ${x} จะมีความเร็วประมาณ ${res}`)
    });
  };

  return (
    <div className="text-center">
      <h1>บทที่ 3</h1>
      <h2>Interpolation & Curve fitting</h2>
      <Row>
        <Row className="col-sm-2"></Row>
        <Row className="card col-sm-8 magin-class">
          <Col>
            <div className="text-center">
              <h4>Ex :</h4>
              <h4>t = 5</h4>
              <h4>x = [ 0, 9, 16, 22, 21, 14 ]</h4>
              <h4>y = [ 0, 52, 99, 112, 100, 86 ]</h4>
            </div>


            <Row>
              <h3 style={{ marginRight: "20px" }}>t:</h3>
              <Input
                style={{ width: 100 }}
                value={x}
                onChange={(e) => setx(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
            </Row>
            <Row>
              <h3 style={{ marginTop: "20px", marginRight: "20px" }}>
                xi:
                     </h3>

              <Input
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={xi1}
                onChange={(e) => setxi1(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={xi2}
                onChange={(e) => setxi2(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={xi3}
                onChange={(e) => setxi3(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={xi4}
                onChange={(e) => setxi4(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={xi5}
                onChange={(e) => setxi5(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={xi6}
                onChange={(e) => setxi6(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
                onChange={(e) => setxi6(e.target.value)}
              />
            </Row>

            <Row>
              <h3 style={{ marginTop: "20px", marginRight: "20px" }}>
                yi:
                    </h3>

              <Input
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={yi1}
                onChange={(e) => setyi1(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={yi2}
                onChange={(e) => setyi2(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={yi3}
                onChange={(e) => setyi3(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={yi4}
                onChange={(e) => setyi4(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={yi5}
                onChange={(e) => setyi5(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={yi6}
                onChange={(e) => setyi6(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              // onChange={(e) => setxi6(e.target.value)}
              />
            </Row>

            <Card className="magin-class2">
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

          </Col>
        </Row>
        <Row className="col-sm-2"></Row>
      </Row>
    </div>

  );
}

export default Interpolation;
