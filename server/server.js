'use strict';

const path = require('path');
const express = require('express');
const fs = require('fs');



const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'src')));

let requests = [];


app.post('/req', (req, res) => {
    requests.push(req.headers);
    res.json({header: requests});
});


app.get('/req', (req, res) => {
    requests.push(req.headers);
    res.json({header: requests});
});


app.get('/clear', (req, res) => {
    requests.length = 0;
});


const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`App start on port ${port}`);
});
