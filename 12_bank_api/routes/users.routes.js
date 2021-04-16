const express = require('express');
const router = express.Router();
//const users = require('../data/users.json');
const userController = require('../controllers/users.controller')

// const users = [
//     {
//         id: 0,
//         cash: 4000,
//         credit:1000
//     }
// ]

router.get('/', (req,res) =>{
    //return res.status(200).json({users : users})
    userController.getAllUsers(req,res)
}).post('/', (req,res) =>{
    userController.addUser(req,res)
}).get('/:id',(req,res) =>{
    userController.getUserById(req,res)
})

module.exports = router;