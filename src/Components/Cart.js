import React from 'react';
import {Col } from 'react-bootstrap';
import course from '../Course_data/CourseInfo';

const Cart = () => {
    const getCourse = course.slice(0, 15);
    console.log(getCourse);

    return (
        <Col md={2}>
        <div className="course-cart">
            <h2>This is price</h2>
        </div>
        </Col>
    );
};

export default Cart;