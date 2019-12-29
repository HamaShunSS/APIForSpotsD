const handleSignin = (req,res, db, bcrypt)=> {
    const { email, password } = req.body;
    if (!email || !password){
        return res.status(400).json('incorrect form submission');
    }
    db.select('email', 'hash').from('login')
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



module.exports = {
    handleSignin: handleSignin
}