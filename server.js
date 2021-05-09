const cors = require('cors');
const axios = require('axios');
const express = require('express');
const app = express();

const port = 6006

app.use(cors());

// Consuming API on Back-end.
app.get('/users', async(req, res) => {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users');
        return res.json(data);
});

app.listen(port);