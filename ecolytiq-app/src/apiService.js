import React, { useState } from 'react';
import axios from 'axios';

const clientID = process.env.REACT_APP_ECOLYTIQ_CLIENT_ID;
const clientSecret = process.env.REACT_APP_ECOLYTIQ_CLIENT_SECRET;

const api = axios.create({
    baseURL: 'https://api.staging.ecolytiq.arm.ecolytiq.network'
});

const getToken = async () => {
    try {
        const params = new URLSearchParams({ grant_type: 'client_credentials', scope: 'all' });
        const response = await api.post('/oauth/token', params, {

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Access-Control-Allow-Origin': '*',
            }, auth: {
                username: 'ai7dgloKh0VQC5EEkRXZaKampcC0jlHjhPrb',
                password: 'XKLjUSw8QBTWXjdeGGOPF8ES8TtZhu0hvz0PAD55FgQWtZyM'
            }
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching token:', error);
        throw error;
    }
};

export const ReturnCO2Models = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/co2-models', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Fetch error: ${error.message}`);
    }
};