const handleAllData = (req, res, db)=> {
    db.select('*').from('spots') // .where({id}) means where id in db matches id from req
        .then(info => {
                res.json(info); // by having [0] here, the response will be just {}
                console.log('いんふぉは？？', info)
            }
        )
        .catch(err => res.status(400).json('error getting user'))
}




module.exports = {
    handleAllData: handleAllData,

}