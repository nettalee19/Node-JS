const express = require('express');
const router = express.Router();
const productControler = require('../controllers/products.controller');


router.get('/',(req,res)=>{
   productControler.getAll(req,res);
}).post('/',(req,res)=>{
   productControler.create(req,res);
}).get('/search/:pName',(req,res) =>{
   productControler.getProduct(req,res)
}).get('/active',(req,res) =>{
   productControler.getActive(req,res)
}).get('/price',(req,res) =>{
   productControler.getProdAtPrice(req,res)
}).get('/category/:cName',(req,res) =>{
   productControler.getAllCategory(req,res)
}).get('/searchID/:id',(req,res) =>{
   productControler.getProductById(req,res)
}).put('/updateID/:id',(req,res) =>{
   productControler.updateActiveDiscount(req,res)
}).delete('/',(req,res) =>{
   productControler.deleteAll(req,res)
}).delete('/:id',(req,res) =>{
   productControler.deleteById(req,res)
})

module.exports = router;
