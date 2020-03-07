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

const changeUserN = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newComments} = req.body;
    db('spots').where('id', '=', id)
        .update({
            username: newComments
        })
        .returning('username')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const changeC = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newComments} = req.body;
    db('spots').where('id', '=', id)
        .update({
            country: newComments
        })
        .returning('country')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const changeEnglish = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newComments} = req.body;
    db('spots').where('id', '=', id)
        .update({
            english: newComments
        })
        .returning('english')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const changeDate = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newComments} = req.body;
    db('spots').where('id', '=', id)
        .update({
            date: newComments
        })
        .returning('date')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}



//login database
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

const changeStatus = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newStatus} = req.body;
    db('login').where('id', '=', id)
        .update({
            status: newStatus
        })
        .returning('status')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

//New
const changeComment = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, newComment} = req.body;
    db('spot').where('id', '=', id)
        .update({
            comment: newComment
        })
        .returning('comment')
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
    changeUserN: changeUserN,
    changeC: changeC,
    changeEnglish: changeEnglish,
    changeDate: changeDate,

    handleUserName: changeUserName,
    handleEmail: changeEmail,
    handleCountry: changeCountry,
    handleStatus: changeStatus,
    //new
    changeComment: changeComment,
}