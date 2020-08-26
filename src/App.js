import React from 'react';
import './Asset/Bootstarp.css';
import './Style.scss';
import {Row, Container } from 'react-bootstrap';
import Course from './Components/Course';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App pt-5">
      <Container>
      <h2 className="text-center mb-5">All Courses</h2>
        <Row>
          <Course></Course>
          <Cart></Cart>
        </Row>
      </Container>
    </div>
  );
}

export default App;
