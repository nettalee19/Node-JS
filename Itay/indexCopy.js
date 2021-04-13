const express= require('express')
const bodyPraser = require('body-parser')

const app = express()
const port= 8001;
const userRoute = require('./routes/users.routesCopy')

app.use(bodyPraser.urlencoded({extended: false}))
app.use(bodyPraser.json())

app.use('/api/users', userRoute)

app.listen(port, () =>{
    console.log(`the app is at ${port}`)
})