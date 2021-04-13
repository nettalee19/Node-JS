setTimeout(() =>{
    console.log('two')
}, 2000)


const geoCode = (address, callback) =>{
    setTimeout(() =>{
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)

    },2000)
    
}

geoCode('New York', (datta) =>{
    console.log(datta)
})

