const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const register = require('./controller/register'); // destructure to .js file
const signin = require('./controller/signin');
const profile = require('./controller/profile');
const image = require('./controller/image');

const search = require('./controller/search');

const db = knex({
    client: 'pg',
    connection: {
        host : 'postgresql-amorphous-34109',
        user : '',
        password : '',
        database : 'smart-brain'
    }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => { res.send('it is working!') });

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt)
console.log(res)});
app.post('/register', (req, res) => { register.handleRegister(req, res, db) });
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) });
app.put('/image', (req, res) => { image.handleImage(req, res, db)});
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)}); // create a new end point '/imageurl'

app.post('/places', (req, res) => { search.handleInfo(req, res, db) }); //this is the server

app.listen(process.env.PORT || 3000, ()=> {
    console.log(`app is running on port 3000 ${process.env.PORT}`);
})
