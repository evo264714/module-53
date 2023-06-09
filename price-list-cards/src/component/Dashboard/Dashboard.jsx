import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const marksArray = [
        {
            id: 1,
            name: 'Alice',
            physics: 80,
            chemistry: 85,
            math: 90
        },
        {
            id: 2,
            name: 'Bob',
            physics: 75,
            chemistry: 80,
            math: 85
        },
        {
            id: 3,
            name: 'Charlie',
            physics: 90,
            chemistry: 85,
            math: 80
        },
        {
            id: 4,
            name: 'David',
            physics: 85,
            chemistry: 90,
            math: 95
        },
        {
            id: 5,
            name: 'Emily',
            physics: 70,
            chemistry: 80,
            math: 75
        },
        {
            id: 6,
            name: 'Frank',
            physics: 85,
            chemistry: 75,
            math: 80
        },
        {
            id: 7,
            name: 'Grace',
            physics: 80,
            chemistry: 85,
            math: 90
        },
        {
            id: 8,
            name: 'Henry',
            physics: 95,
            chemistry: 80,
            math: 85
        },
        {
            id: 9,
            name: 'Isabella',
            physics: 90,
            chemistry: 85,
            math: 80
        },
        {
            id: 10,
            name: 'John',
            physics: 80,
            chemistry: 90,
            math: 75
        },
        {
            id: 11,
            name: 'Kate',
            physics: 85,
            chemistry: 80,
            math: 90
        },
        {
            id: 12,
            name: 'Liam',
            physics: 90,
            chemistry: 75,
            math: 85
        }
    ];

    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={marksArray}
            >
                <Line dataKey={'physics'}></Line>
                <Line stroke="#8884d8" dataKey={'math'}></Line>
                <Line stroke="#82ca9d" dataKey={'chemistry'}></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip />

            </LineChart>
        </div>
    );
};

export default Dashboard;