const mongoose = require("mongoose");
const mongoDB_url = "mongodb+srv://mongodbuser:TwGvvbosCHMcEBuD@cluster0.v7thc.mongodb.net/Twitter?retryWrites=true&w=majority";

const connectDB = async function () {
    mongoose.connect(mongoDB_url, {
        useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
        useFindAndModify: false,
    })
    mongoose.connection.on("connected", () => {
        console.log("Succesfully connected to Database")
    })

    mongoose.connection.on("disconnected", () => {
        console.log("Could not connect to the database ");
        process.exit();
    })

    mongoose.connection.on("error", () => {
        console.log("Error in Connecting to Database");
        process.exit(1)
    })

}

module.exports =  connectDB