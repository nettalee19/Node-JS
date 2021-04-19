
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL ='mongodb://127.0.0.1:27017'
//const databaseName ='task-manager'
const databaseName ='task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error, client) =>{
    if(error){
        return console.log("Unable to connect to database")
    }

    //console.log("Connected correctly")

    const db = client.db(databaseName)

    // db.collection('rest').insertOne({
        
        

    // }, (error, result) =>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })



    // db.collection('rest').insertMany(
        
    //     [
    //         {
    //           name: "bombay",
    //           address: {
    //             city: "Holon",
    //             street: "Herzel 15",
    //             coordinates: [-77.46574, 40.6774],
    //           },
    //           cuisine: "indian",
    //           kosher: true,
    //           reviews: [
    //             {
    //               date: new Date("2016-01-01"),
    //               score: 7,
    //             },
    //             {
    //               date: new Date("2019-01-01"),
    //               score: 3,
    //             },
    //             {
    //               date: new Date("2018-01-01"),
    //               score: 8,
    //             },
    //           ],
    //         },
    //         {
    //           name: "falafel 5 shekels",
    //           address: {
    //             city: "Bat-Yam",
    //             street: "Histradrut 85",
    //             coordinates: [-70.46574, 10.6774],
    //           },
    //           cuisine: "street food",
    //           kosher: false,
    //           reviews: [
    //             {
    //               date: new Date("2019-01-01"),
    //               score: 3,
    //             },
    //             {
    //               date: new Date("2016-01-01"),
    //               score: 8,
    //             },
    //             {
    //               date: new Date("2020-01-01"),
    //               score: 4,
    //             },
    //           ],
    //         },
    //         {
    //           name: "asian delight",
    //           address: {
    //             city: "Tel Aviv",
    //             street: "Balfur 15",
    //             coordinates: [-10.46574, 30.6774],
    //           },
    //           cuisine: "asian",
    //           kosher: true,
    //           reviews: [
    //             {
    //               date: new Date("2020-01-01"),
    //               score: 3,
    //             },
    //             {
    //               date: new Date("2018-01-01"),
    //               score: 8,
    //             },
    //             {
    //               date: new Date("2016-01-01"),
    //               score: 9,
    //             },
    //           ],
    //         },
    //         {
    //           name: "coconut jam",
    //           address: {
    //             city: "Tel Aviv",
    //             street: "Stam Adress 15",
    //             coordinates: [20.46574, -40.6774],
    //           },
    //           cuisine: "african",
    //           kosher: true,
    //           reviews: [
    //             {
    //               date: new Date("2017-01-01"),
    //               score: 10,
    //             },
    //             {
    //               date: new Date("2016-01-01"),
    //               score: 8,
    //             },
    //             {
    //               date: new Date("2019-01-01"),
    //               score: 6,
    //             },
    //           ],
    //         },
    //         {
    //           name: "rice and noodles",
    //           address: {
    //             city: "Holon",
    //             street: "Bla Bla 15",
    //             coordinates: [20.46574, 10.6774],
    //           },
    //           cuisine: "asian",
    //           kosher: false,
    //           reviews: [
    //             {
    //               date: new Date("2016-01-01"),
    //               score: 1,
    //             },
    //             {
    //               date: new Date("2019-01-01"),
    //               score: 6,
    //             },
    //             {
    //               date: new Date("2019-01-01"),
    //               score: 2,
    //             },
    //           ],
    //         },
    //         {
    //           name: "thailand paradise",
    //           address: {
    //             city: "Holon",
    //             street: "Bla 13",
    //             coordinates: [-77.46574, 40.6774],
    //           },
    //           cuisine: "asian",
    //           kosher: false,
    //           reviews: [
    //             {
    //               date: new Date("2020-01-01"),
    //               score: 7,
    //             },
    //             {
    //               date: new Date("2019-01-01"),
    //               score: 6,
    //             },
    //             {
    //               date: new Date("2020-01-01"),
    //               score: 2,
    //             },
    //           ],
    //         },
    //       ]
           
    // ), ((error, result) =>{
    //         if(error){
    //             return console.log('Unable to insert user')
    //         }
    //         console.log(result.ops)
    //     })


    //2
    // db.collection('rest').find({cuisine:'asian'}).toArray((error,users) =>{
    //     console.log(users)
    // }) 

    //3
    // db.collection('rest').find({"kosher":true}).toArray((error,users) =>{
    //     console.log(users)
    // }) 

    //4
    // db.collection('rest').find({"address.city":"Bat-Yam"}).toArray((error,users) =>{
    //     console.log(users)
    // }) 

    //5
    // db.collection('rest').find({"address.street":"Herzel 15"}).toArray((error,users) =>{
    //     console.log(users)
    // })
    
    //6
    // db.collection('rest').find({"address.coordinates":10.6774}).toArray((error,users) =>{
    //     console.log(users)
    // })

    //7
    //Write a MongoDb query that should display all restaurants in ascending order by restaurant name.
    // db.collection('rest').find().sort({name:1}).toArray((error,users) =>{
    //     console.log(users)
    // })

    //8
    //Write a MongoDb query that should display all restaurants in ascending order by city names.
    // db.collection('rest').find().sort({"address.city":1}).toArray((error,users) =>{
    //     console.log(users)
    // })
        
    //9 Update a specific restaurant's name    
    //db.collection('rest').updateOne({name: 'falafel 5 shekels'}, {$set: {name: 'Netta jam'}}) 

    //10 Update a specific restaurant by adding a new review.
    //db.collection('rest').updateOne({"name": "Netta jam"}, {$push: {"reviews": {date:"2021-03-19", score:100}}}) 
    
    //11 Update all restaurants to be kosher
    //db.collection('rest').updateOne({kosher: false}, {$set: {kosher: true}}) 
    
    //12
    //db.collection('rest').deleteOne({name: "bombay"}) 

    //13
    //db.collection('rest').deleteMany({name:"bombay"},{name:"asian delight"}) 
    //db.collection('rest').deleteMany({name:"asian delight"}) 

    //14 Increment a specific restaurants score by 2
    db.collection('rest').find({name:"Netta jam"}).updateOne({$inc: { "reviews.score": 2 } })

    //15 decrement a specific restaurants score by 1


    //2.2
    // db.collection('rest').find().sort({name:1}).forEach(res =>{
    //     console.log(res.name)
    // })


    //3.1Query for restaurant names that start with a specific alphabet
    // db.collection('rest').find({name: /^N/}).toArray((error,users) =>{
    //     console.log(users)
    // })

    //3.2 - Query how many documents you have from the restaurant collection.
    // db.collection('rest').countDocuments({name: "Netta jam"}).toArray((error,users) =>{
    //         console.log(users)
    //     })
    // db.collection('rest').count().toArray((error,users) =>{
    //     console.log(users)
    // })

    //3.3 - Write a MongoDb query to get restaurants that include reviews from a specific date.
    // db.collection('rest').find({"reviews.date": "2021-03-19"}).toArray((error,res) =>{
    //     console.log(res)
    // })
})