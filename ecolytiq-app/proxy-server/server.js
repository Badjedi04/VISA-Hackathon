const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/recommend', (req, res) => {
    const food = req.body.food;
    console.log(`Received food name: ${food}`);
    const response = { message: `Recommendation for food: ${food}` };
    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
