const express = require('express');
const router = express.Router();
const usersJson = require('../users.json');
const w = [
    {
        id: 0,
        name: "netta lee",
        capsule:1
    },
    {
        id: 1,
        name: "lee",
        capsule: 1
    }
]

router.get('/',(req,res)=>{
    return res.status(200).json({users : w}) //userJson
}).get('/:id',(req,res)=>{
    return res.status(200).json({users : w[req.params.id]}) //userJson
}).post('/',(req,res)=>{

    const {name,capsule} = req.body;
    w.push({
        id:w[w.length-1].id +1,
        name:name,
        capsule:capsule
    })
    
    console.log("helo")
    console.log(req.body)
    return res.send(req.body)
}).put('/:id', (req,res) =>{
    const {id} = req.params
    const {capsule} = req.body
    // console.log("id: ", id)
    // res.send("bla bla")

    if(!capsule || id<0){
        res.status(204).send("something went wrong")
    }
    let user = w.find((u) =>{
        return u.id == id
    })
    if(!user){
        res.status(204).send("wrong")
    }
    w[id].capsule = capsule
    res.send("yes")

}).delete('/:id', (req,res) =>{
    const {id} = req.params;
    const index2 = w.indexOf(w.filter(user => user.id == id)[0]);
    w.splice(index2,1);
    console.log(w); //terminal
    res.send("deleted") //whst we see in the postman
})

module.exports = router;
