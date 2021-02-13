const User = require('./Users');

exports.createNewUser = async (req,res)=>{
    let newUser = await  new User(req.body)
    await newUser.save(async (err,user)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            // await user.generateAuthToken();
            res.status(200).send(user)
        }
    })
    
}