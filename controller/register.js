const handleRegister =(req, res, db)=> {
    const { name, category, location, url, price, region, ramen, food, view, cafe, hobby, club, bar, study, nature, shopping, beauty, kankou, others, comments, date, username, country, city } = req.body;
    if (!name || !location || !comments){
        return res.status(400).json('incorrect form submission');
    }
    db('spots').insert({ // use "trx" instead of db from here
            name: name,
            category: category,
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
            kankou: kankou,
            others: others,
            comments: comments,
            date: date,
            username: username,
            country: country,
            city: city
        })
        .then
        (res.json('success'))
    }

const handleInsert =(req, res, db)=> {
    const { name, price, url, phone, location, photo1, photo2, photo3, lon, lat, bizid, comment, commentid, by, country, date, city } = req.body;
    if (!name || !comment){
        return res.status(400).json('incorrect form submission');
    }
    db('spot').insert({ // use "trx" instead of db from here
        name: name,
        lon: lon,
        lat: lat,
        price: price,
        url: url,
        bizid: bizid,
        phone: phone,
        location: location,
        photo1: photo1,
        photo2: photo2,
        photo3: photo3,
        comment: comment,
        commentid: commentid,
        country: country,
        by: by,
        date: date,
        city: city
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
    handleRegister: handleRegister,
    handleInsert: handleInsert
};