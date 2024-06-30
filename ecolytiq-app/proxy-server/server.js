const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;

app.get('/api/co2-models', async (req, res) => {
    try {
        const response = await axios.get(`${apiUrl}/your-endpoint`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const port = 3001;
app.listen(port, () => {
    console.log(`Proxy server running on port ${port}`);
});
