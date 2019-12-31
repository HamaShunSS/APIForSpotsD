const changeComments = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newComments} = req.body;
    db('spots').where('id', '=', id)
        .update({
            comments: newComments
        })
        .returning('comments')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const changeURL = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newComments} = req.body;
    db('spots').where('id', '=', id)
        .update({
            url: newComments
        })
        .returning('url')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const changeName = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newComments} = req.body;
    db('spots').where('id', '=', id)
        .update({
            name: newComments
        })
        .returning('name')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const changeLocation = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newComments} = req.body;
    db('spots').where('id', '=', id)
        .update({
            location: newComments
        })
        .returning('location')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const changePrice = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newComments} = req.body;
    db('spots').where('id', '=', id)
        .update({
            price: newComments
        })
        .returning('price')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const changeCategory = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newComments} = req.body;
    db('spots').where('id', '=', id)
        .update({
            category: newComments
        })
        .returning('category')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const changeUserName = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newUserName} = req.body;
    db('login').where('id', '=', id)
        .update({
            username: newUserName
        })
        .returning('username')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const changeEmail = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newEmail} = req.body;
    db('login').where('id', '=', id)
        .update({
            email: newEmail
        })
        .returning('email')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const changeCountry = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newCountry} = req.body;
    db('login').where('id', '=', id)
        .update({
            country: newCountry
        })
        .returning('country')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}



module.exports = {
    handleComments: changeComments,
    handleURL: changeURL,
    handleName: changeName,
    handleLocation: changeLocation,
    handleCategory: changeCategory,
    handlePrice: changePrice,
    handleUserName: changeUserName,
    handleEmail: changeEmail,
    handleCountry: changeCountry
}