const handleIine = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id } = req.body;
    db('spots').where('id', '=', id)
        .increment('iine', 1)
        .returning('iine')
        .then((res.json('success')))
        .catch(err => res.status(400).json('unable to get entries'))
}


module.exports = {
    handleIine: handleIine,
}