const handleTouroku = (req, res, db, bcrypt)=> {
    const { email, password, username, country, status } = req.body;
    const hash = bcrypt.hashSync(password);
    if (!email){
        return res.status(400).json('incorrect form submission');
    }
    db('login').insert({ // use "trx" instead of db from here
        hash: hash,
        email : email,
        username: username,
        country: country,
        status: status
    })
    handleSignin(req, res, db, bcrypt)
}

const handleSignin = (req,res, db, bcrypt)=> {
    const { email, password } = req.body;
    if (!email || !password){
        return res.status(400).json('incorrect form submission');
    }
    db.select('*').from('login')
        .where('email', '=', email)
        .then(data => {
            const isValid = bcrypt.compareSync(password, data[0].hash); // compare password from request with password(hashed) from db
            if (isValid){ // "if () {}" returns true or false
                return res.json(data[0])
                // return db.select('email').from('login')
                //     .where('email', '=', email)
                //     .then(user => {
                //         res.json(user[0])
                //     })
                    .catch(err => res.status(400).json('isValidらへんの問題'))
            } else {
                res.status(400).json('wrong credentials')
            }
        })
        .catch(error => res.status(400).json('wrong credentials'))
}



// .into('spots')
//     .returning('name') // returns from db
//     .then(loginEmail => {
//         return trx('users')
//             .returning('*')
//             .insert({
//                 email: loginEmail[0],
//                 name: name,
//                 joined: new Date()
//             })


module.exports = {
    handleTouroku: handleTouroku
};