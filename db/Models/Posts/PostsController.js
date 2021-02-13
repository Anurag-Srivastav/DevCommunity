const Post = require('./Posts');

exports.createNewPost  = async (req, res) => {
    let newPost = await new Post(req.body);
    
    await newPost.save(async(err, post)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(post);
        }
    })
}