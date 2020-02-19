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

const handleNotAuthentic = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, strings} = req.body;
    db('spot').where('id', '=', id)
        .update({
            notauthentic: strings
        })
        .returning('notauthentic')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const handleGood = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, strings} = req.body;
    db('spot').where('id', '=', id)
        .update({
            good: strings
        })
        .returning('good')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const handleBad = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, strings} = req.body;
    db('spot').where('id', '=', id)
        .update({
            bad: strings
        })
        .returning('bad')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}


module.exports = {
    handleAuthentic: handleAuthentic,
    handleNotAuthentic: handleNotAuthentic,
    handleGood: handleGood,
    handleBad: handleBad
}