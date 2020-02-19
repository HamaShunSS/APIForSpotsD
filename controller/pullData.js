const handlePullData = (req,res, db)=> {
    const { lon, lat } = req.body;
    const degree = 0.435;
    if (lon === null || lat === null){
        return res.status(400).json('no data');
    }
    db.select('*').from('spot')
        // .where(('lon', '<', (lon + degree)) && ('lon', '>', (lon - degree)) && ('lat', '<', (lat + degree)) && ('lat', '>', (lat - degree)) )
        .then(data => {
            data.filter(location => {
                if ((location.lon < (lon + degree)) && (location.lon > (lon - degree)) && (location.lat < (lat + degree)) && (location.lat > (lat - degree))  ) {
                    return (
                        res.json(location)
                    )
                }
            })
                .catch(error => res.status(400).json('wrong credentials'))
            })

        //     if (data.length > 0){ // "if () {}" returns true or false
        //         return res.json(data[0])
        //         // return db.select('email').from('login')
        //         //     .where('email', '=', email)
        //         //     .then(user => {
        //         //         res.json(user[0])
        //         //     })
        //             .catch(err => res.status(400).json('data.lengthらへんの問題'))
        //     } else {
        //         res.status(400).json('no data')
        //     }
        // })
        // .catch(error => res.status(400).json('wrong credentials'))
}



module.exports = {
    handlePullData: handlePullData
}