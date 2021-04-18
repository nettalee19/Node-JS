const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const app = express();
const cors = require('cors');
const port =8001;

//const users=require('../data/users.json')

const db=fs.readFileSync('../data/users.json').toString()
dbb=JSON.parse(db)

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
   //return res.json({success : {id:12,email : 'nully@gmail.com'}})
   //return res.send({success : "API IS WORKING!"})
   console.log("this")
   return res.json({success : {dbb}})
})



// app.listen(port,()=>{
//     console.log(`appli start at ${port}`)
// })

app.listen(process.env.PORT || 5000)

