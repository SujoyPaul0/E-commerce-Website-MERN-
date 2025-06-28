const express = require('express')
const mongoose = require('mongoose');
const coockieParser = require('coockie-parser');
const cors = require('cors');


// Create a database connection -> u can also
// create a separate file for this and then import/use that file here

mongoose.connect('mongodb+srv://Sujoy0:<omnamoshivai>@cluster0.49spult.mongodb.net/').then(()=>console.log('MongoDB connected')).catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
);

app.use(coockieParser());
app.use(express.json());

app.listen(PORT, ()=> console.log(`Server is now running on port ${PORT}`))