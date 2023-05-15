const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const connectDB = require('./config/database');

connectDB();

app.get('/', (req, res) => {
    res.send('Hello Boniface');
    }
);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    }
);
