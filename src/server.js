const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "pug");

app.get('/', (req, res) => {
    res.send('To do lists');
});


