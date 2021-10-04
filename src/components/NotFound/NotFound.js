import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const handleHome = () => {
        history.push('/home');
    }
    return (
        <div>
            <h1>Page Not Found</h1>
            <h1>404</h1>
            <Button onClick={handleHome} className="btn-regular">Back To Home</Button>
        </div>
    );
};

export default NotFound;