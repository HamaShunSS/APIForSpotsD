const handleRegister =(req, res, db)=> {
    const { name, location, url, price, region, ramen, food, view, cafe, hobby, club, bar, study, nature, shopping, beauty, deli, others, comments } = req.body;
    if (!name || !location || !comments){
        return res.status(400).json('incorrect form submission');
    }
    db('spots').insert({ // use "trx" instead of db from here
            name: name,
            location: location,
            url: url,
            price: price,
            region: region,
            ramen: ramen,
            food: food,
            view: view,
            cafe: cafe,
            hobby: hobby,
            club: club,
            bar: bar,
            study: study,
            nature: nature,
            shopping: shopping,
            beauty: beauty,
            deli: deli,
            others: others,
            comments: comments
        })
        .then
        (res.json('success'))
    }



// .into('spots')
//     .returning('name') // returns from db
//     .then(loginEmail => {
//         return trx('users')
//             .returning('*')
//             .insert({
//                 email: loginEmail[0],
//                 name: name,
//                 joined: new Date()
//             })


module.exports = {
    handleRegister: handleRegister
};