const request = require('request')
const geoCode = require('./geoCode')

//const url = 'http://api.weatherstack.com/current?access_key=d1af750ea723a140a7ccc670e2d6dbea&query=37.8267,-122.4233&units=f'
const url = 'http://api.weatherstack.com/current?access_key=d1af750ea723a140a7ccc670e2d6dbea&query='

request({url: url, json:true}, (error, response) =>{
    //console.log(response)
    // const data = JSON.parse(response.body)
    // console.log(data.current)
    //console.log(response.body.current) 
    if(error){
        console.log("error there")
    } else if(response.body.error){
        console.log('unable to find location')
    }
    else{
        console.log(`${response.body.current.weather_descriptions}----It is ${response.body.current.temperature} degress out there. It feels like ${response.body.current.feelslike} degress out.`)

    }
})

//Geocoding
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmV0dGFsZWUxOSIsImEiOiJja25mcjVlbDIwMDFsMnVvYnprc3pldzl5In0.iQG7YdFnZo1UdYXIaGfg3A&limit=1'

request({url: geocodeURL, json:true}, (error, response) =>{
    if(error){
        console.log("unable to connect")
    } else if (response.body.features.length === 0 ) {
        console.log("unable to find location")
    } else {
        const latitude= response.body.features[0].center[1]
        const longitude= response.body.features[0].center[0]
        console.log(latitude, longitude)

    }
})

// const geoCode = (address, callback) =>{
//     // const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibmV0dGFsZWUxOSIsImEiOiJja25mcjVlbDIwMDFsMnVvYnprc3pldzl5In0.iQG7YdFnZo1UdYXIaGfg3A&limit=1`
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibmV0dGFsZWUxOSIsImEiOiJja25mcjVlbDIwMDFsMnVvYnprc3pldzl5In0.iQG7YdFnZo1UdYXIaGfg3A&limit=1'

//     request({url: url, json: true }, (error, response) =>{
//         if(error){
//             callback('Unable to connect', undefined)
//         } else if (response.body.features.length === 0) {
//             callback('unable to find location 22', undefined)
//         }else{
//             callback(undefined, {
//                 latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }

geoCode('New York', (error,data) =>{
    console.log('Error', error)
    console.log('Data', data)
})