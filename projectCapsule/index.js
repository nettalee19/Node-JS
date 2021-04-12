const express = require("express")
const bodyParser = require('body-parser');

const app = express()
const port = 8000;
const usersRoute = require('./routes/users.routes')

app.use(bodyParser.urlencoded({ extended: false}))
app.use

server.listen(port, () =>{
    console.log(`the port is  + ${port}s`)
})

