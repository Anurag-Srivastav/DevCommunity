const Post_Action = require('./Post_Actions');
const Posts  = require('../Posts/Posts');
const Post_Actions = require('./Post_Actions');

var ActionOnPost = async( req, res ) => {
    if(req.params.type == "like"){
        let newLike = await new Post_Action(req.body);
        Posts.findById(req.body.Post).then((post, err)=>{
            if(err){
                res.send(err)
            }
            else{
                post.likes_count = post.likes_count + 1;
                post.save();
            }
        })
        newLike.save(async(like , err)=>{
            if(err){
                res.send(err);
            }
            else{
                res.send(like)
            }
        })
    }
    else{
            Post_Action.findOne({Post : req.body.Post, Author : req.body.Author}, function (error, like){
                if(error){
                    res.send(err)
                }
                else{
                    console.log("This object will get deleted " + like);
                    like.remove();
                }
        
            });
            Posts.findById(req.body.Post).then((post , err)=>{
                if(err){
                    res.send(err)
                }
                else{
                    post.likes_count = post.likes_count - 1;
                    post.save()
                }
            })
            res.send("Unliked ")
        }
    }

var getLikes = async (req, res ) => {
    const Likes = await Post_Action.find({ Post : req.body.Post }, {Post : 0}).populate('Author',{name:1, _id: 0} )
    res.send(Likes)
}

var getPosts = async (req, res ) => {
    const Posts = await Post_Action.find({Author : req.params.userId});
    res.send(Posts)
}

module.exports = {
    ActionOnPost,
    getLikes,
    getPosts
}