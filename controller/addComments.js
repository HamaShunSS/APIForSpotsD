const handleComments = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, com, originalComments} = req.body;
    db('spots').where('id', '=', id)
        .update({
            comments: com + " / " +  originalComments
        })
        .returning('comments')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const handleComment = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, com, originalComments, userid, username, country} = req.body;
    db('spot').where('id', '=', id)
        .update({
            comment: originalComments + "||" +  com + '|'+ userid + '|'+ username + '|'+ country
        })
        .returning('comment')
        .then
        (res.json('success'))
        .catch(err => res.status(400).json('unable to get entries'))
}

const handleBadComment = (req, res, db)=> { // put is for update ex) update counts for rank or update the profile
    const { id, com, originalComments, userid, username, country} = req.body;
    if (originalComments === ''){
        db('spot').where('id', '=', id)
            .update({
                badcomment: com + '|'+ userid + '|'+ username + '|'+ country
            })
            .returning('badcomment')
            .then
            (res.json('success'))
            .catch(err => res.status(400).json('unable to get entries'))
    } else {
        db('spot').where('id', '=', id)
            .update({
                badcomment: originalComments + "||" +  com + '|'+ userid + '|'+ username + '|'+ country
            })
            .returning('badcomment')
            .then
            (res.json('success'))
            .catch(err => res.status(400).json('unable to get entries'))
    }
}


module.exports = {
    handleComments: handleComments,
    handleComment:handleComment,
    handleBadComment: handleBadComment
}