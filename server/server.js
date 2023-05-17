const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./app/config/database');
const patientRoutes = require('./app/routes/patientRoutes');
const errorHandler = require('./app/middleware/errMiddleware');


connectDB();


const app = express();

app.use(express.json());
app.use(errorHandler);


app.use('/api/patients', patientRoutes );


app.listen(port, () => {
    console.log(`Server running on port ${port}`.yellow.bold);
});
 

