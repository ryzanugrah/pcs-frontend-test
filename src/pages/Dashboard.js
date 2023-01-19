import React from 'react';
import {
  Button,
  Card,
  Carousel,
  Table,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container fluid>
      <Row className="mb-3">
        <Col md="9">
          <h1 className="fs-3">Hi, Good Morning!</h1>
        </Col>
        <Col md="3" className="d-grid gap-2">
          <Button
            variant="danger"
            size="lg"
            style={{
              margin: '1rem 0',
              color: 'white',
              backgroundColor: 'red',
              borderRadius: '20px',
            }}
          >
            Check out
          </Button>{' '}
        </Col>
      </Row>

      <Row>
        <Col md="8">
          <Card
            className="p-4"
            style={{
              background:
                'linear-gradient(322deg, rgba(192,17,105,1) 35%, rgba(248,44,23,1) 100%)',
              borderRadius: '20px',
            }}
          >
            <Row>
              <Col sm="2" xs="4">
                <Card.Img
                  variant="top"
                  src={require('../assets/img/profile.jpg')}
                  style={{
                    width: '120%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              </Col>
              <Col sm="5" xs="4">
                <Card.Body>
                  <Card.Title
                    className="text-white"
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                    }}
                  >
                    Tabay
                  </Card.Title>
                  <Card.Text
                    className="text-white"
                    style={{
                      fontStyle: 'italic',
                    }}
                  >
                    UI/UX Designer
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col
                sm="5"
                xs="4"
                style={{
                  textAlign: 'right',
                }}
              >
                <Card.Body>
                  <Card.Title
                    className="text-white"
                    style={{
                      fontStyle: 'italic',
                    }}
                  >
                    Member since
                  </Card.Title>
                  <Card.Text
                    className="text-white"
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                    }}
                  >
                    01 Juni 2021
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
            <Row>
              <Col sm="6" xs="6">
                <Card.Body>
                  <Card.Title className="text-white">Location</Card.Title>
                  <Card.Text
                    className="text-white"
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                    }}
                  >
                    Kantor Sahid
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col
                sm="6"
                xs="6"
                style={{
                  textAlign: 'right',
                }}
              >
                <Card.Body>
                  <Card.Text
                    className="text-white mt-3"
                    style={{
                      fontSize: '1.2rem',
                      fontStyle: 'italic',
                    }}
                  >
                    ICO
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md="4">
          <Card
            className="text-white"
            style={{
              borderRadius: '20px',
            }}
          >
            <Card.Img
              src={require('../assets/img/welcome.jpg')}
              alt="Card image"
              style={{
                borderRadius: '20px',
              }}
            />
            <Card.ImgOverlay
              style={{
                background:
                  'linear-gradient(322deg, rgba(192,17,105,.6) 35%, rgba(248,44,23,.6) 100%)',
                borderRadius: '20px',
              }}
            >
              <Card.Title
                className="text-white"
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                Welcome to Your Dashboard
              </Card.Title>
              <Card.Text>
                Get familiar with the dashboard, here are some ways to get
                started.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <h1 className="fs-3 fw-bolder">Today's activity</h1>
      <Row>
        <Col lg="4" sm="4">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col>
                  <div className="icon-big text-center mb-2">
                    <i className="fa-regular fa-clock"></i>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="numbers">
                    <Card.Title className="fs-5 fw-bolder mb-3">
                      08:30
                    </Card.Title>
                    <Card.Text>Check in</Card.Text>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" sm="4">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col>
                  <div className="icon-big text-center mb-2">
                    <i className="fa-regular fa-clock-rotate-left"></i>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="numbers">
                    <Card.Title className="fs-5 fw-bolder mb-3">
                      03:00:00
                    </Card.Title>
                    <Card.Text>Working hours</Card.Text>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" sm="4">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col>
                  <div className="icon-big text-center mb-2">
                    <i className="fa-regular fa-clock"></i>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="numbers">
                    <Card.Title className="fs-5 fw-bolder mb-3">
                      --:--
                    </Card.Title>
                    <Card.Text>Check out</Card.Text>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h1 className="fs-3 fw-bolder">PCS News</h1>
      <Carousel
        controls={false}
        variant="dark"
        style={{
          margin: '0 -0.7rem',
        }}
      >
        <Carousel.Item className="mb-4 px-2">
          <Row>
            <Col lg="6" sm="6">
              <Card className="card-stats">
                <Card.Body
                  style={{
                    padding: '0rem',
                  }}
                >
                  <Row>
                    <Col sm="2" xs="4">
                      <Card.Img
                        variant="top"
                        src={require('../assets/img/profile.jpg')}
                        style={{
                          maxWidth: '100%',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          margin: '1rem',
                        }}
                      />
                    </Col>
                    <Col sm="5" xs="4">
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            color: 'red',
                          }}
                        >
                          Tabay
                        </Card.Title>
                      </Card.Body>
                    </Col>
                    <Col
                      sm="5"
                      xs="4"
                      style={{
                        textAlign: 'right',
                      }}
                    >
                      <Card.Body>
                        <Card.Title>Senin</Card.Title>
                        <Card.Text>30 Mei 2022</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      margin: '0 0 1rem 1rem',
                    }}
                  >
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum odit dolorum consectetur commodi asperiores!
                      Consequuntur nisi ipsam nobis ducimus accusantium,
                      officiis amet, qui necessitatibus in facere doloremque
                      corrupti placeat voluptates.
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum odit dolorum consectetur commodi asperiores!
                      Consequuntur nisi ipsam nobis ducimus accusantium,
                      officiis amet, qui necessitatibus in facere doloremque
                      corrupti placeat voluptates.
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum odit dolorum consectetur commodi asperiores!
                      Consequuntur nisi ipsam nobis ducimus accusantium,
                      officiis amet, qui necessitatibus in facere doloremque
                      corrupti placeat voluptates.
                    </Card.Text>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6" sm="6">
              <Card className="card-stats">
                <Card.Body
                  style={{
                    padding: '0rem',
                  }}
                >
                  <Row>
                    <Col sm="2" xs="4">
                      <Card.Img
                        variant="top"
                        src={require('../assets/img/profile.jpg')}
                        style={{
                          maxWidth: '100%',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          margin: '1rem',
                        }}
                      />
                    </Col>
                    <Col sm="5" xs="4">
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            color: 'red',
                          }}
                        >
                          Tabay
                        </Card.Title>
                      </Card.Body>
                    </Col>
                    <Col
                      sm="5"
                      xs="4"
                      style={{
                        textAlign: 'right',
                      }}
                    >
                      <Card.Body>
                        <Card.Title>Senin</Card.Title>
                        <Card.Text>30 Mei 2022</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      margin: '0 0 1rem 1rem',
                    }}
                  >
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum odit dolorum consectetur commodi asperiores!
                      Consequuntur nisi ipsam nobis ducimus accusantium,
                      officiis amet, qui necessitatibus in facere doloremque
                      corrupti placeat voluptates.
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum odit dolorum consectetur commodi asperiores!
                      Consequuntur nisi ipsam nobis ducimus accusantium,
                      officiis amet, qui necessitatibus in facere doloremque
                      corrupti placeat voluptates.
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum odit dolorum consectetur commodi asperiores!
                      Consequuntur nisi ipsam nobis ducimus accusantium,
                      officiis amet, qui necessitatibus in facere doloremque
                      corrupti placeat voluptates.
                    </Card.Text>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item className="mb-4 px-2">
          <Row>
            <Col lg="6" sm="6">
              <Card className="card-stats">
                <Card.Body
                  style={{
                    padding: '0rem',
                  }}
                >
                  <Row>
                    <Col sm="2" xs="4">
                      <Card.Img
                        variant="top"
                        src={require('../assets/img/profile.jpg')}
                        style={{
                          maxWidth: '100%',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          margin: '1rem',
                        }}
                      />
                    </Col>
                    <Col sm="5" xs="4">
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            color: 'red',
                          }}
                        >
                          Tabay
                        </Card.Title>
                      </Card.Body>
                    </Col>
                    <Col
                      sm="5"
                      xs="4"
                      style={{
                        textAlign: 'right',
                      }}
                    >
                      <Card.Body>
                        <Card.Title>Senin</Card.Title>
                        <Card.Text>30 Mei 2022</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      margin: '0 0 1rem 1rem',
                    }}
                  >
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum odit dolorum consectetur commodi asperiores!
                      Consequuntur nisi ipsam nobis ducimus accusantium,
                      officiis amet, qui necessitatibus in facere doloremque
                      corrupti placeat voluptates.
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum odit dolorum consectetur commodi asperiores!
                      Consequuntur nisi ipsam nobis ducimus accusantium,
                      officiis amet, qui necessitatibus in facere doloremque
                      corrupti placeat voluptates.
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum odit dolorum consectetur commodi asperiores!
                      Consequuntur nisi ipsam nobis ducimus accusantium,
                      officiis amet, qui necessitatibus in facere doloremque
                      corrupti placeat voluptates.
                    </Card.Text>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6" sm="6">
              <Card className="card-stats">
                <Card.Body
                  style={{
                    padding: '0rem',
                  }}
                >
                  <Row>
                    <Col sm="2" xs="4">
                      <Card.Img
                        variant="top"
                        src={require('../assets/img/profile.jpg')}
                        style={{
                          maxWidth: '100%',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          margin: '1rem',
                        }}
                      />
                    </Col>
                    <Col sm="5" xs="4">
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            color: 'red',
                          }}
                        >
                          Tabay
                        </Card.Title>
                      </Card.Body>
                    </Col>
                    <Col
                      sm="5"
                      xs="4"
                      style={{
                        textAlign: 'right',
                      }}
                    >
                      <Card.Body>
                        <Card.Title>Senin</Card.Title>
                        <Card.Text>30 Mei 2022</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      margin: '0 0 1rem 1rem',
                    }}
                  >
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum odit dolorum consectetur commodi asperiores!
                      Consequuntur nisi ipsam nobis ducimus accusantium,
                      officiis amet, qui necessitatibus in facere doloremque
                      corrupti placeat voluptates.
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum odit dolorum consectetur commodi asperiores!
                      Consequuntur nisi ipsam nobis ducimus accusantium,
                      officiis amet, qui necessitatibus in facere doloremque
                      corrupti placeat voluptates.
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum odit dolorum consectetur commodi asperiores!
                      Consequuntur nisi ipsam nobis ducimus accusantium,
                      officiis amet, qui necessitatibus in facere doloremque
                      corrupti placeat voluptates.
                    </Card.Text>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      <h1 className="fs-3 fw-bolder">Online</h1>
      <Col md="12">
        <Card>
          <Card.Body>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jefri</td>
                  <td>Front End Developer</td>
                  <td>Developer</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Zasami</td>
                  <td>Back End Developer</td>
                  <td>Developer</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sam</td>
                  <td>UI/UX Designer</td>
                  <td>Designer</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Aldo</td>
                  <td>HR</td>
                  <td>Human Resource</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Erwin</td>
                  <td>Quality Assurance</td>
                  <td>Developer</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}

export default Dashboard;
