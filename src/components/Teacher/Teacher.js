import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Teacher = (props) => {
    const { name, education, image } = props.teacher;
    // No URL for this reason its going to not found page
    const history = useHistory();
    const handleNotFound = () => {
        history.push('/notfound');
    }
    return (
        <Col>
            <Card className="shadow-lg" style={{ height: "300px" }}>
                <Card.Img variant="top w-50 h-50 mx-auto p-2" src={image} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        {education}
                    </Card.Text>
                    <Button className="btn-regular" onClick={handleNotFound}>Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Teacher;