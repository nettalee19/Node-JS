const productModel = require('../models/products.model');


const createProduct = (req, res) => {

    const {name, category} = req.body;
    console.log(req.body)
    
    const product = new productModel({
        name: name,
        category: category
    });
    // product.save((err) => {
    //     if (err) return res.json({"error": err})
    //     return res.json({"success": product})
    // });
    product.save().then(() =>{  
        console.log(product)
    }).catch((error) =>{
        console.log('Error:', error)
    })


}

const getProducts = (req, res) => {
    productModel.find().then((product) => {
        return res.send(product)
    });
}

module.exports = {
    create: createProduct,
    getAll: getProducts
}
