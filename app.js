const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, './public');
app.use( express.static(publicPath) );

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'));
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'));
})

app.listen(PORT, () => {
console.log('Servidor  escuchando en el puerto ' +PORT);
});

