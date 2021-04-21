const productModel = require('../models/products.model');


const createProduct = (req, res) => {

    const {name, category, details} = req.body;
    console.log(req.body)
    
    const product = new productModel({
        name: name,
        category: category,
        details: details
    });
    product.save((err) => {
        if (err) return res.json({"error": err})
        return res.json({"success": product})
    });

    // product.save().then(() =>{  
    //     console.log(product)
    // }).catch((error) =>{
    //     console.log('Error:', error)
    // })


}

// 2) get products
// const getProducts = (req, res) => {
//     productModel.find().then((product) => {
//         return res.send(product)
//     });
// }
const getProducts = async (req, res) => {
    const products = await productModel.find()
    return res.send(products)
    
}


//3) get one product
// const getProduct= (req, res) =>{
//     const {pName} = req.params
//     productModel.find({name: {$regex: `${pName}`}}).then((product) =>{
//         return res.send(product)
//     })
// }
const getProduct= async (req, res) =>{
    const {pName} = req.params
    const product = await productModel.find({name: {$regex: `${pName}`}})
    return res.send(product)
    
}


const getProductById= async (req, res) =>{
    const {id} = req.params
    const product = await productModel.find({_id: `${id}`})

    if(!id){
        return res.send("no such id")

    }
    return res.send(product)

    
    
}

//4) get by active
// const getActive= (req, res) =>{
//     productModel.find({isActive: true}).then((products) =>{
//         return res.send(products)
//     })
// }
const getActive= async (req, res) =>{
    const active = await productModel.find({isActive: true})
    return res.send(active)
    
}

//5) price range

// const getProdAtPrice = (req,res) =>{
//     productModel.find({'details.price': {$gte:10, $lt:500}}).then((products) =>{
//         return res.send(products)
//     })
// }

const getProdAtPrice = async(req,res) =>{
    const range = await productModel.find({'details.price': {$gte:10, $lt:500}})
    return res.send(range)
    
}




// get by categoty
// const getAllCategory = (req,res) =>{
//     const {cName} = req.params
//     productModel.find({'category': {$regex: `${cName}`}}).then((products) =>{
//         return res.send(products)
//     })
// }
const getAllCategory = async (req,res) =>{
    const {cName} = req.params
    const cata = await productModel.find({'category': {$regex: `${cName}`}})
    return res.send(cata)
    
}

const updateActiveDiscount = async (req,res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdate = ["isActive", "discount"]
    const isValidOperation = updates.every((update) => allowedUpdate.includes(update))
    const {id} = req.params
    const {isActive, discount} = req.body

    if(!isValidOperation) {
        return res.status(400).send({error: 'Updates most be either active or discount'})
    }
    try {
        const product = await productModel.findByIdAndUpdate(id, { isActive: isActive, "details.discount": discount }, {new:true, runValidators: true })
        
        if(!product){
            res.status(404).send("No such product")
        }
        
        return res.send(product)

    } catch{
        res.status(400).send(e)
    }
}

const deleteAll = async (req,res) =>{
    try{
        const products = await productModel.deleteMany({})
        res.send(products)
    }
    catch(e){
        throw new Error(e)
    } 
}


const deleteById = (req,res) =>{
    const {id} = req.params

    productModel.findOneAndDelete({_id: id}, (err,doc) =>{
        if(err) return res.send(err)
        if(doc) return res.send(doc)
        return res.send({error: 'Couldnt delete, no such id'})
    })
}

module.exports = {
    create: createProduct,
    getAll: getProducts,
    getProduct,
    getProductById,
    getActive,
    getProdAtPrice,
    getAllCategory,
    updateActiveDiscount,
    deleteAll ,
    deleteById  
}
