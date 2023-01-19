import React from 'react';
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const Setting = () => {
  return (
    <Container fluid>
      <Row>
        <h1 className="fs-3 fw-bolder">Setting</h1>
        <Card>
          <Row>
            <Col md="4">
              <Card.Body>
                <div className="author">
                  <a href="" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="Profile picture"
                      className="avatar border-gray"
                      src={require('assets/img/profile.jpg')}
                    ></img>
                  </a>
                </div>
              </Card.Body>
            </Col>
            <Col md="8">
              <Card.Body>
                <Form>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Email</label>
                        <Form.Control
                          defaultValue="user@kerjayuk.com"
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          placeholder="Password"
                          type="password"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue="Ana"
                          placeholder="First Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue="Riswati"
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue="Jalan RE Martadinata No. 23"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue="Jakarta"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue="Indonesia"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          defaultValue="45161"
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Job</label>
                        <Form.Control
                          disabled
                          defaultValue="Full Stack Developer"
                          placeholder="Job"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    variant="danger"
                    style={{
                      margin: '1rem 0',
                      color: 'white',
                      backgroundColor: 'red',
                      borderRadius: '20px',
                    }}
                  >
                    Update profile
                  </Button>{' '}
                </Form>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
};

export default Setting;
