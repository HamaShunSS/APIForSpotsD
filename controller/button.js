const handleIine = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id } = req.body;
    db('spots').where('id', '=', id)
        .increment('iine', 1)
        .returning('iine')
        .then(iine => {
            res.json(iine[0])
        })
        .catch(err => res.status(400).json('unable to get entries'))
}

const handleWaruiine = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id } = req.body;
    db('spots').where('id', '=', id)
        .increment('waruiine', 1)
        .returning('waruiine')
        .then(waruiine => {
            res.json(waruiine[0])
        })
        .catch(err => res.status(400).json('unable to get entries'))
}


module.exports = {
    handleIine: handleIine,
    handleWaruiine: handleWaruiine
}