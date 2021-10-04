import React from 'react';
import { Row } from 'react-bootstrap';
import UseCourses from '../../hooks/UseCourses';
import HomeDetails from '../HomeDetails/HomeDetails';

const Home = () => {
    const [courses] = UseCourses();
    // const { name, image, price } = courses;
    // console.log(courses);
    return (
        <div>
            <Row xs={1} md={3} lg={4} className="g-4">
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