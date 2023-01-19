import React from 'react';
import { Card, Table, Container, Row, Col } from 'react-bootstrap';

const Attendance = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <h1 className="fs-3 fw-bolder">Attendance</h1>
          <Col md="12">
            <Card>
              <Card.Body>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Date</th>
                      <th>Check In</th>
                      <th>Check Out</th>
                      <th>Working Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>1 january 2022</td>
                      <td>08:00</td>
                      <td>17:00</td>
                      <td>08:00:00</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>2 january 2022</td>
                      <td>08:00</td>
                      <td>17:00</td>
                      <td>08:00:00</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>3 january 2022</td>
                      <td>08:00</td>
                      <td>17:00</td>
                      <td>08:00:00</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>4 january 2022</td>
                      <td>08:00</td>
                      <td>17:00</td>
                      <td>08:00:00</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>5 january 2022</td>
                      <td>08:00</td>
                      <td>17:00</td>
                      <td>08:00:00</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Attendance;
