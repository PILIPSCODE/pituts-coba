const mongoose = require('mongoose')



const commentsmodel = mongoose.Schema({
    comment:{
        type:String,
        require:true,
    },
    filter:{
        type:String,
        require:true
    },
    nameofcomment:{
        type:String,
        require:true
    },
    ppofcomment:{
        type:String,
        require:true
    },
    email:{
        type:String
    
    },
    date:{
        type:String
    },
    bio:{
        type:String,
        require:true
    },
    web:{
        type:String,
        require:true
    }
})

const comment =  mongoose.model("comments",commentsmodel)


module.exports= comment