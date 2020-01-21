const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res, next) => {
    return res.send('Hello World!');
});

app.get('/throw', (req, res, next) => {
    throw new Error('Something is Wrong');
});

app.get('/time', (req, res, next) => {
    return res.send(new Date().toString());
});

app.get('/hello', (req, res, next) => {
    if(!req.query.name) {
        return res.status(400).end();
    }
    return res.send(new Date().toString());
});

app.get('/user/:name', (req, res, next) => {
    return res.send(`Userprofile of ${req.params.name}`);
});

app.listen(3000);
