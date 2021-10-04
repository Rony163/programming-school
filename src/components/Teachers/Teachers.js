import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('/teachers.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div>
            <Row xs={2} md={3} lg={3} className="g-4">
                {
                    teachers.map(teacher => <Teacher
                        key={teacher.id}
                        teacher={teacher}
                    ></Teacher>)
                }
            </Row>
        </div>
    );
};

export default Teachers;