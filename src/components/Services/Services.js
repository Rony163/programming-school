import React from 'react';
import { Row } from 'react-bootstrap';
import UseCourses from '../../hooks/UseCourses';
import Service from '../Service/Service';

const Services = () => {
    const [courses] = UseCourses();
    return (
        <div>
            <Row xs={1} md={3} lg={4} className="g-4">
                {
                    courses.map(course => <Service
                        key={course.id}
                        course={course}
                    ></Service>)
                }
            </Row>

        </div>
    );
};

export default Services;