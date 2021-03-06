const handleProfileGet = (req, res, db)=> {
    const { id } = req.params;
    db.select('*').from('login').where({id}) // .where({id}) means where id in db matches id from req
        .then(user => {
            if (user.length){
                res.json(user[0]); // by having [0] here, the response will be just {}
            } else {
                res.status(400).json('Not found')
            }
        })
        .catch(err => res.status(400).json('error getting user'))
}

module.exports = {
    handleProfileGet
}