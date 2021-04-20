const mongoose = require('mongoose')

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
    },
    details:{
        description:{
            type: String,
            
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