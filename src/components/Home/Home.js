import React from 'react';
import { Row } from 'react-bootstrap';
import UseCourses from '../../hooks/UseCourses';
import HomeDetails from '../HomeDetails/HomeDetails';
import image from '../../images/download (1).jfif';

const Home = () => {
    const [courses] = UseCourses();
    // const { name, image, price } = courses;
    // console.log(courses);
    return (
        <div>
            <div className="row">
                <div className="col-lg-6 col-md-6 mt-3">
                    <img className="w-75" src={image} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 mt-3">
                    <h2>Welcome to our Programming school</h2>
                    <p className="mt-4">Some schools offer associate's degrees in computer programming, but bachelor's and master's degrees in computer programming are more common. Doctoral-level degrees in this field can also be found. Some of the best colleges for computer programming include the Massachusetts Institute of Technology, Stanford University, and the University of Texas. We've narrowed down some of the best programming language programs for undergraduates with details about some of the best computer programming degrees.</p>
                </div>
            </div>
            <h1 className="text-success mt-2">Some Key Courses</h1>
            <Row xs={2} md={3} lg={4} className="g-4">
                {
                    courses.slice(0, 4).map(course => <HomeDetails
                        key={course.id}
                        course={course}
                    ></HomeDetails>)
                }
            </Row>
        </div>
    );
};

export default Home;