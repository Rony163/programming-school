import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: "Courses A",
            mobile: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Courses B",
            mobile: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Courses C",
            mobile: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Courses D",
            mobile: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Courses E",
            mobile: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Courses F",
            mobile: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Courses G",
            mobile: 3490,
            pv: 4300,
            amt: 2100
        }
    ];
    return (
        <LineChart
            width={800}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >

            <XAxis dataKey="name" />
            <YAxis />

            <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="mobile" stroke="#82ca9d" />
        </LineChart>
    );
};

export default Chart;