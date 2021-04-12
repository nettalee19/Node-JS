const express = require('express');
const router = express.Router();
const usersJson = require('../users.json');
const w =  [
   { id: 0, capsule: 4, name: "david" },
   { id: 1, capsule: 4, name: "netta" }
 
]

router.get('/',(req,res)=>{
    return res.status(200).json({users : usersJson.users})
}).get('/:id',(req,res)=>{
    return res.status(200).json({user : usersJson.users[req.params.id]})
}).post('/',(req,res)=>{

})

module.exports = router;