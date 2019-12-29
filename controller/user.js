const handleUser = (req,res, db, bcrypt)=> {
    const { email } = req.body;
    db.select('*').from('login')
        .where('email', '=', email)
        .then(data => {

            return res.json(data[0])
                // return db.select('email').from('login')
                //     .where('email', '=', email)
                //     .then(user => {
                //         res.json(user[0])
                //     })

        })
        .catch(error => res.status(400).json('wrong credentials'))
}



module.exports = {
    handleUser: handleUser
}