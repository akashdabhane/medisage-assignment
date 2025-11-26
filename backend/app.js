const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// cross origin platform
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,  
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(morgan('tiny'));
app.use(express.json());


module.exports = app;