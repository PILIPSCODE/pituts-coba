const mongoose = require('mongoose')




const LikeScema = mongoose.Schema({
    nameoflike:{
        require:true,
        type:String
    },
    web:{
        require:true,
        type:String
    },
    bio:{
        require:true,
        type:String
    },
    filter:{
        require:true,
        type:String
    },
    ppoflikes:{
        require:true,
        type:String
    },
    date:{
        require:true,
        type:String
    },
    filt:{
        require:true,
        type:String
    },
})

const likemodel = mongoose.model("likesuser",LikeScema)


module.exports = likemodel