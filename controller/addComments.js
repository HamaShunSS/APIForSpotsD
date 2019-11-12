const handleComments = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { location, com, originalComments} = req.body;
    db('spots').select('location', '=', location)
        .update({
            comments: com + " / " +  originalComments
        })
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}


module.exports = {
    handleComments: handleComments
}