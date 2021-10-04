import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/programming.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <div>
            <Row xs={1} md={3} lg={4} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>

        </div>
    );
};

export default Services;