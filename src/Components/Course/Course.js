import React from 'react';
import  { Button } from 'react-bootstrap';
const Course = (props) => {
    // console.log(props.course_data);
    const {name, description, lecture, image, lecturer, price, hours} = props.course_data;
    return (
            <div className="course d-flex">
                <div className="image">
                    <img src={image} alt={name}/>
                </div>
                <div className="course-deatils">
                    <h3>{name}</h3>
                    <p className="description">{description}</p>
                    <p className="teacher">{lecturer}</p>
                    <p className="per_hour">{hours} Total hours. <span>{lecture} Lectures</span></p>
                    <Button onClick={() => props.addCourseHandel(props.course_data)} variant="secondary">Add To Cart</Button>
                </div>
                <div className="course-price">
                    <h4>${price}</h4>
                </div>
            </div>
    );
};

export default Course;