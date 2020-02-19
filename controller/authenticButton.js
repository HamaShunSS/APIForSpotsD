const handleAuthentic = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, stringifiedAuth} = req.body;
    db('spot').where('id', '=', id)
        .update({
            authentic: stringifiedAuth
        })
        .returning('authentic')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}


module.exports = {
    handleAuthentic: handleAuthentic
}