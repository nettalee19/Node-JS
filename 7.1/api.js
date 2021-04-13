const request = require('request')
//const axios = require('axios')
//const superagent = require('superagent')


//request
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




//axios
// const getData = async () =>{
//     const data = await axios.get(url)
//     console.log(data.data)
// }

// getData()



//superagent
// superagent.get(url)
// .then(response =>{
// console.log(response.body.message)
// }).catch(err=>{
//     console.log(err)
// })