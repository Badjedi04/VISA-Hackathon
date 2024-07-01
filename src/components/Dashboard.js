// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from '.src/components/Dropdown';

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');

    const options = ['Option1', 'Option2', 'Option3'];
    useEffect(() => {
        if (selectedOption) {
            axios.post('http://127.0.0.1:5000/recommend', { option: selectedOption })
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the data!", error);
                });
        }
    }, [selectedOption]);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <Dropdown options={options} onChange={handleChange} />
            <div>
                {data ? (
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                ) : (
                    <p>Select an option to see data</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;