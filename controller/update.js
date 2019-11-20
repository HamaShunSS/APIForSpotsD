const changeUpdate = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newComments} = req.body;
    db('spots').where('id', '=', id)
        .update({
            price: newComments
        })
        .returning('price')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}


module.exports = {
    handleUpdate: changeUpdate
}