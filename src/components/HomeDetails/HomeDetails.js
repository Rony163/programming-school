import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomeDetails = (props) => {
    console.log(props)
    const { name, image, price } = props.course;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Course Name: {name}</Card.Title>
                    <Card.Text>
                        Course Price: {price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HomeDetails;