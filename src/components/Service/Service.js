import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './service.css';

const Service = (props) => {
    const history = useHistory();
    const handleNotFound = () => {
        history.push('/notfound');
    }
    const { name, image, price } = props.course;
    return (
        <Col className="p-3">
            <Card style={{ height: "300px" }}>
                <Card.Img variant="top w-100 h-50 mx-auto p-2" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Course Price: {price}
                    </Card.Text>
                    <Button onClick={handleNotFound} className="btn-regular">Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;