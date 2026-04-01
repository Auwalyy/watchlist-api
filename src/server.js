import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'Welcome to Watchlist movie app.'});
});


const PORT = 5000;
const server = app.listen(PORT, ( ) => {
    console.log(`Server is running on PORT ${PORT}`);
});

// AUTH - signup, login, logout
// MOVIES - add, delete, update, get all movies, get movie by id
// WATCHLIST - add movie to watchlist, remove movie from watchlist, get watchlist for user
// USER - get user profile, update user profile, delete user account