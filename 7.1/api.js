const request = require('request')

//const callQuete = (topic, callback) => {
    //const url = 'https://www.tronalddump.io/tag/'
    const url = 'https://dog.ceo/api/breeds/list'

    request({url: url, json:true}, (error,response) =>{
        if(error){
            console.log("there is an error")
        } else{
            console.log(`${response.body.message} `)
        }
    })
//}