import React from 'react';
import { useHistory } from 'react-router';
import Chart from '../Chart/Chart';

const About = () => {
    const history = useHistory();
    const handleBack = () => {
        history.push('/home')
    }
    return (
        <div>
            <div>
                <div className="m-3 bg-success border border-info text-white">
                    <h1>About this School</h1>
                    <p>This school have lot of courses, you can buy this courses with reasonable price.</p>
                    <p>Some Important fact about our School <br />
                        Here you can learn many programming language and after that you can get a job.
                    </p>
                </div>
            </div>
            <div>
                <Chart></Chart>
                <button className="mb-2 btn-regular" onClick={handleBack}>Back To Home Page</button>
            </div>
        </div>
    );
};

export default About;