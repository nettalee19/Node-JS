const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller')

router.get('/', (req,res) =>{
    //return res.status(200).json({users : users})
    userController.getAllUsers(req,res)
}).post('/', (req,res) =>{
    userController.addUser(req,res)
}).get('/:Id',(req,res) =>{
    userController.getUserById(req,res)
}).put('/:id/deposit', (req,res) =>{
    userController.deposit(req,res)
}).put('/:id/credit', (req,res) =>{
    userController.updateCredit(req,res)
}).put('/:id/withdraw', (req,res) =>{
    userController.withdrawMoney(req,res)
}).put('/transfer',(req,res)=>{
    userController.transferMoney(req,res)
})
// .get('/',(req,res)=>{
//     userController.showUsers(req,res)
//  })

module.exports = router;