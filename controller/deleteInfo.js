const handleDelete = (req, res, db)=> {
    const { id } = req.body;
    db.select('*').from('spots').where('id', '=', id).del()
        .then
        (res.json('success'))
}

const handleDeleteSpot = (req, res, db)=> {
    const { id } = req.body;
    db.select('*').from('spot').where('id', '=', id).del()
        .then
        (res.json('success'))
}


module.exports = {
    handleDeleteInfo: handleDelete,
    handleDeleteSpot: handleDeleteSpot
}