const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/ecomm',{
//     useNewUrlParser: true,
//     useCreateIndex:true
// })

//model
const Products = mongoose.model('Produ',{ 
    name: {
        type: String,
        required:true,
        trim: true,
        unique: true
    },
    category:{
        type: String,
        required: true,
    },
    isActive:{
        type: Boolean,
    },
    details:{
        description:{
            type: String,
            required: true,
            validate(value){
                if(value.length < 10){
                    throw new Error("Description must be longer than 10")
                }
            }
        },
        price:{
            type: Number,
            required: true,
            validate(value){
                if(value < 1){
                    throw new Error("Price must be positive")
                }
            }
        },
        discount:{
            type: Number,
            required: false,
            default: 0
        },
        images:{
            type: String,
            
        },
        phoneNumber:{
            type: Number,
            
        },
        dateAdded:{
            type: Date,
            default: Date.now()
        }
    }
})

//instance
const prod = new Products({ 
    name: "Cool Top",
    category: "Tops",
    isActive:true,
    details:{
        description:"This is a very pretty top",
        price:20.99,
        discount:10,
        phoneNumber: 05444444

    }
})

//const prosuctmodel  = mongoose.model('rooms',roomSchema);
module.exports= Products;

//to the db
prod.save().then(() =>{  
    console.log(prod)
}).catch((error) =>{
    console.log('Error:', error)
})