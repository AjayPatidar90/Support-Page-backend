const mongoose = require("mongoose");

let modeldetail = mongoose.Schema({
    Name:{
        type:"String",
        required:"true"
    },
    Email:{
        type:"String",
        required:"true"
    },
    text:{
        type:"String",
        required:"true"
    },

})

const  data = mongoose.model("detail",modeldetail)  

  module.exports = data