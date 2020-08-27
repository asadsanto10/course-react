import React from 'react';
import {Col, Row } from 'react-bootstrap';
import course from '../../CourseData';
import { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Purcehes = () => {
    // course data show
    const getCourse = course.slice(0, 15);
    // console.log(getCourse);
    const [courseData] = useState(getCourse);

    // total course purchese button
    const [totacourse, setTotalCourse] = useState([])
    const addCourseHandel = (totalCart) => {
        const newCart = [...totacourse, totalCart];
        setTotalCourse(newCart)
    }
    return (
        <Row className="reverse">
            <Col xl={8} lg={12}>
                {
                    courseData.map(course => <Course key={course.id} addCourseHandel={addCourseHandel} course_data={course}></Course>)
                }
            </Col>
            <Col xl={4} lg={12}>
                <Cart cartInfo={totacourse}></Cart>
            </Col>
        </Row>
    );
};

export default Purcehes;