const handleDeleteUser = (req, res, db)=> {
    const { id } = req.body;
    db.select('*').from('login').where('id', '=', id).del()
        .then
        (res.json('success'))
}


module.exports = {
    handleDeleteUser: handleDeleteUser
}