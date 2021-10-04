import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const HomeDetails = (props) => {
    // console.log(props)
    // No URL for this reason its going to not found page
    const history = useHistory();
    const handleHome = () => {
        history.push('/notfound');
    }
    const { name, image, price } = props.course;
    return (
        <Col className="p-3">
            <Card className=" shadow-lg" style={{ height: "300px" }}>
                <Card.Img variant="top w-100 h-50 mx-auto p-2" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Course Price: {price}
                    </Card.Text>
                    <Button onClick={handleHome} className="btn-regular">Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HomeDetails;