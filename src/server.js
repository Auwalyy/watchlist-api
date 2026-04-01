const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({message: 'Welcome to Watchlist movie app.'});
});


const PORT = 5000;
const server = app.listen(PORT, ( ) => {
    console.log(`Server is running on PORT ${PORT}`);
});