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
const button = require('./controller/button');
const addComments = require('./controller/addComments');
const allData = require('./controller/allData');
const changeData = require('./controller/changeData');

const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true,
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
app.put('/button', (req, res) => { button.handleIine(req, res, db)});
app.put('/buttonW', (req, res) => { button.handleWaruiine(req, res, db)});
app.put('/addcomments', (req, res) => { addComments.handleComments(req, res, db)});
app.get('/allData', (req, res) => { allData.handleAllData(req, res, db)});
app.put('/changeData', (req, res) => { changeData.handleData(req, res, db)});

app.listen(process.env.PORT || 3000, ()=> {
    console.log(`app is running on port 3000 ${process.env.PORT}`);
})
