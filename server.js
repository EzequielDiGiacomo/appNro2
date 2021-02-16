
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/Desktop\EjercicioNro2\ejercicio2'));

app.get('/*',(req, res) =>
    res.sendFile('index.html', {root: 'dist/Desktop\EjercicioNro2\ejercicio2'}),
);

app.listen(process.env.PORT || 8080);