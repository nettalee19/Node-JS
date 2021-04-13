const request = require('request')

const geoCode = (address, callback) =>{
    
    // const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibmV0dGFsZWUxOSIsImEiOiJja25mcjVlbDIwMDFsMnVvYnprc3pldzl5In0.iQG7YdFnZo1UdYXIaGfg3A&limit=1`
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibmV0dGFsZWUxOSIsImEiOiJja25mcjVlbDIwMDFsMnVvYnprc3pldzl5In0.iQG7YdFnZo1UdYXIaGfg3A&limit=1'

    request({url: url, json: true }, (error, response) =>{
        if(error){
            callback('Unable to connect', undefined)
        } else if (response.body.features.length === 0) {
            callback('unable to find location 22', undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode

// geoCode('New York', (error,data) =>{
//     console.log('Error', error)
//     console.log('Data', data)
// })