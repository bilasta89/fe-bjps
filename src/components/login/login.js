/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoBpjs from '@assets/logoBpjs.png';

function Login() {
  return (
    <div>
      <Container className="tengah">
        <Row>
          <Col>
            <img src={LogoBpjs} alt="logo" className="imageLogo" />
            <h1 className="textLogin">SIMON KeCe</h1>
            <div className="d-flex justify-content-center align-items-center">
              <Form>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    <i className="bi bi-person-fill" />
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-2">
                  <Form.Control
                    placeholder="Password"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    <i className="bi bi-lock-fill" />
                  </InputGroup.Text>
                </InputGroup>
                <div className="d-flex justify-content-between align-items-center">
                  <Link className="linkPass">Forgot Password</Link>
                  <Button variant="success" type="submit">
                    Sign In
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
