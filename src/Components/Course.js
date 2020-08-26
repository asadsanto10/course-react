import React from 'react';
import {Col } from 'react-bootstrap';
const Course = () => {

    return (
        <Col md={10}>
        <div className="course d-flex">
            <div className="image">
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
    );
};

export default Course;