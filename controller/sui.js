const handleSearch = (req, res, db)=> {
    db.select('*').from('professors')
        .then(prof => {
                res.json(prof); // by having [0] here, the response will be just {}
            }
        )
        .catch(err => res.status(400).json('error getting user'))
}

const handleSUI = (req, res, db)=> {
    const { region } = req.body;
    db.select('*').from('spots').where('region', '=', region ) // .where({id}) means where id in db matches id from req
        .then(info => {
                res.json(info); // by having [0] here, the response will be just {}
                console.log('いんふぉは？？', info)
            }
        )
        .catch(err => res.status(400).json('error getting user'))
}




module.exports = {
    handleSearch: handleSearch,
    handleSUI: handleSUI,
}