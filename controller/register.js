const handleRegister =(req, res, db)=> {
    const { name, location, url, price, ramen, food, view, cafe, park, club, bar, study, hiking, shopping, beauty, comments } = req.body;
    if (!name || !location || !comments){
        return res.status(400).json('incorrect form submission');
    }
    db('spots').insert({ // use "trx" instead of db from here
            name: name,
            location: location,
            url: url,
            price: price,
            ramen: ramen,
            food: food,
            view: view,
            cafe: cafe,
            park: park,
            club: club,
            bar: bar,
            study: study,
            hiking: hiking,
            shopping: shopping,
            beauty: beauty,
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