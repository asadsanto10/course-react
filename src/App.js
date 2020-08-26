import React from 'react';
import './Asset/Bootstarp.css';
import './Style.scss';
import {Row, Container, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App pt-5">
      <Container>
      <h2 className="text-center mb-5">All Courses</h2>
        <Row>
          <Col md={10}>
            <div className="course d-flex">
              <div clsName="image">
                <img src="https://img-a.udemycdn.com/course/240x135/625204_436a_2.jpg" alt=""/>
              </div>
              <div className="course-deatils">
                <h3>This is course deatils</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sequi officia quidem?</p>
              </div>
              <div className="course-price">
                <h4>$45</h4>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <div className="course-price">
              <h2>This is price</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
