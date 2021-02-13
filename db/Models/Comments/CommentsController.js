const Comment = require('./Comments');

var PostComment = async (req, res) => {
    let newComment = await new Comment(req.body);
    await newComment.save(async(err, comment)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(comment);
        }
    })
}

module.exports ={
    'PostComment' : PostComment
}