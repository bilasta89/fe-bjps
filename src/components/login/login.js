import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoBpjs from "../login/logoBpjs.png";

function Login() {
  return (
    <div>
      <Container className="tengah ">
        <Row>
          <Col>
            <img src={LogoBpjs} alt="logo" className="imageLogo" />
            <h1 className="textLogin">SIMON KeCe</h1>
            <div className="setForm ">
              <Form>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-2">
                  <Form.Control placeholder="Pasword" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
                </InputGroup>
                <div>
                  <Link
                    className="linkPass 
                  "
                  >
                    Forgot Pasword
                  </Link>

                  <Button variant="success" type="submit" class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
                    Masuk
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
