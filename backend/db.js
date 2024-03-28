const mongoose = require("mongoose");

const connectDb=()=>{
    mongoose.connect("")
    .then(()=>{
        console.log("db connected....")
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDb;