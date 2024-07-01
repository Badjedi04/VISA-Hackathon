// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (inputValue) {
            axios.post('http://127.0.0.1:5000/recommend', { option: inputValue })
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the data!", error);
                });
        }
    }, [inputValue]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter a value"
            />
            <div>
                {data ? (
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                ) : (
                    <p>Enter a value to see data</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
