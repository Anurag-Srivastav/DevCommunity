const mongoose = require('mongoose')

const AddressSchema = new mongoose.Schema({
    House_No : { type: String, required : true},
    StreetName : {type: String, required: true},
    Landmark : { type: String},
    City : {type: String, required: true},
    State : {type: String, required: true},
    PinCode : {type: Number, required : true},
    Country : {type: String, required: true}
})

const Users = new mongoose.Schema({
    name : {type:String, required:true},
    Contact : {type: Number, required: true},
    Address :{type:String, required:true},
    organization_id : {type:String }
})

module.exports = mongoose.model('Users', Users);


