const mongoose = require('mongoose')
const validator = require('validator')

// mongoose.connect('mongodb://127.0.0.1:27017/ecomm',{
//     useNewUrlParser: true,
//     useCreateIndex:true
// })

//model
const Products = mongoose.model('produs',{ 
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
        required: false,
        unique: false,
        default: true

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
        // images:{
        //     type: [String],
        //     validate(value){
        //         if(value.length <2){
        //             throw new Error("Price must be positive")
        //         }
        //     }
            
        // },
        phoneNumber:{
            type: String,
            required: true,
            // minLength: 10,
            // maxLength: 10
            validate(value){
                if (!validator.isMobilePhone(value, "he-IL") ) {
                    throw new Error("Not a valid Israeli phone")
                }
          
            }
            
        },
        dateAdded:{
            type: Date,
            default: Date.now()
        }
    }
})

//instance
// const product = new Products({ 
//     name: "Cool Top",
//     category: "Tops",
//     isActive:true,
//     details:{
//         description:"This is a very pretty top",
//         price:20.99,
//         discount:10,
//         phoneNumber: 05444444

//     }
// })

//const prosuctmodel  = mongoose.model('rooms',roomSchema);
module.exports= Products;

//to the db
// product.save().then(() =>{  
//     console.log(prod)
// }).catch((error) =>{
//     console.log('Error:', error)
// })