const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controller/register'); // destructure to .js file
const signin = require('./controller/signin');
const profile = require('./controller/profile');
const image = require('./controller/image');

const search = require('./controller/search');
const button = require('./controller/button');
const addComments = require('./controller/addComments');
const allData = require('./controller/allData');
const changeComments = require('./controller/changeData');
const changeURL = require('./controller/changeData');
const changeName = require('./controller/changeData');
const changeLocation = require('./controller/changeData');
const changePrice = require('./controller/changeData');
const changeCategory = require('./controller/changeData');
const touroku = require('./controller/touroku');
const sui = require('./controller/sui');
const user = require('./controller/user');
const deleteInfo = require('./controller/deleteInfo');


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

app.post('/register', (req, res) => { register.handleRegister(req, res, db) });
app.post('/profile', (req, res) => { profile.handleProfilePost(req, res, db) }); //本当は /profile/:id
app.put('/image', (req, res) => { image.handleImage(req, res, db)});
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)}); // create a new end point '/imageurl'

app.post('/places', (req, res) => { search.handleInfo(req, res, db) }); //this is the server
app.put('/button', (req, res) => { button.handleIine(req, res, db)});
app.put('/buttonW', (req, res) => { button.handleWaruiine(req, res, db)});
app.put('/buttonD', (req, res) => { button.handleIineD(req, res, db)});
app.put('/buttonWD', (req, res) => { button.handleWaruiineD(req, res, db)});
app.put('/addcomments', (req, res) => { addComments.handleComments(req, res, db)});
app.get('/allData', (req, res) => { allData.handleAllData(req, res, db)});
app.get('/allUsers', (req, res) => { allData.handleAllUsers(req, res, db)});
app.put('/changeComments', (req, res) => { changeComments.handleComments(req, res, db)});
app.put('/changeURL', (req, res) => { changeURL.handleURL(req, res, db) });
app.put('/changeName', (req, res) => { changeName.handleName(req, res, db) });
app.put('/changeLocation', (req, res) => { changeLocation.handleLocation(req, res, db) });
app.put('/changeCategory', (req, res) => { changeCategory.handleCategory(req, res, db) });
app.put('/changePrice', (req, res) => { changePrice.handlePrice(req, res, db) });
app.post('/touroku', (req, res) => { touroku.handleTouroku(req, res, db, bcrypt) });
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt)
    console.log(res)});
app.post('/sui', (req, res) => { sui.handleSUI(req, res, db) });
app.post('/user', (req, res) => { user.handleUser(req, res, db) });
app.del('/deleteInfo', (req, res) => { deleteInfo.handleDeleteInfo(req, res, db) });

app.listen(process.env.PORT || 3000, ()=> {
    console.log(`app is running on port 3000 ${process.env.PORT}`);
})
