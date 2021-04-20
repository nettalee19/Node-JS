const productModel = require('../models/products.model');


const createProduct = (req, res) => {
    // const data = req.body;
    const {name, category} = req.body;
    // if (roomNumber < 0) {
    //     return res.json({"error": "asfsaf"})
    // }
    const product = new productModel({
        name: name,
        category: category
    });
    product.save((err) => {
        if (err) return res.json({"error": err})
        return res.json({"success": room})
    });


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
