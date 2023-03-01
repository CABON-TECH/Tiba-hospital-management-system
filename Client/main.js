const dotenv = require("dotenv").config();
const bodyparser = require("body-parser");
const mongooose = require("mongoose");
const cors = require("cors");
const colors = require("colors");
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`)})