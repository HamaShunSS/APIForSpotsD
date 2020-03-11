const handleTouroku =(req, res, db, bcrypt)=> {
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
        .then
        (res.json({username, country, email, id}))
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