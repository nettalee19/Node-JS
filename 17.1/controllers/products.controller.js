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

const getProducts = (req, res) => {
    productModel.find().then((product) => {
        return res.send(product)
    });
}

const getProduct= (req, res) =>{
    const {pName} = req.params
    productModel.find({name: {$regex: `${pName}`}}).then((product) =>{
        return res.send(product)
    })
}

const getActive= (req, res) =>{
    productModel.find({isActive: true}).then((products) =>{
        return res.send(products)
    })
}

const getProdAtPrice = (req,res) =>{
    productModel.find({'details.price': {$gte:10, $lt:500}}).then((products) =>{
        return res.send(products)
    })
}

const getAllCategory = (req,res) =>{
    const {cName} = req.params
    productModel.find({'category': {$regex: `${cName}`}}).then((products) =>{
        return res.send(products)
    })
}

module.exports = {
    create: createProduct,
    getAll: getProducts,
    getProduct,
    getActive,
    getProdAtPrice,
    getAllCategory
}
