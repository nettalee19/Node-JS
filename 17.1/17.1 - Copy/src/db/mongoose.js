const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex:true
})

//model
const User = mongoose.model('User',{ 
    name: {
        type: String,
        required:true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new mongoose.Error('Email ')
            }
        }
    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error("Age must be positive")
            }
        }
    }
})

//instance
const me = new User({ 
    name: "   Tully    ",
    email:"tully@gmail.com"
})

//to the db
me.save().then(() =>{  
    console.log(me)
}).catch((error) =>{
    console.log('Error:', error)
})