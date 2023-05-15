const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const connectDB = require('./app/config/database');

connectDB();

app.get('/', (req, res) => {
    res.send('hello world');
    }
);





app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    }
);
