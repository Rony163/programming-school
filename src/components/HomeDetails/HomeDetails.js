import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomeDetails = (props) => {
    console.log(props)
    const { name, image, price } = props.course;
    return (
        <Col className="p-3">
            <Card className="bg-success text-white shadow-lg" style={{ height: "300px" }}>
                <Card.Img variant="top w-75 h-50 mx-auto p-2" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Course Price: {price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HomeDetails;