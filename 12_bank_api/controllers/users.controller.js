const users = require('../data/users.json')
// const users = [
//     {
//         "id": 0,
//         "cash": 60000,
//         "credit":1000
//     }
// ]


const addUser = (req,res)=>{
    const {cash, credit} = req.body;

    // let result = workers.find((w) => {
    //     return w.id == id
    // })
    // if (!name || !id) {
    //     return res.status(200).json({error: 'enter id and name'})
    // } else if (name.length < 6 || !name.includes(' ')) {
    //     return res.status(200).json({error: 'name must includes space and length bigger then 5'})
    // } else if (result) {
    //     return res.status(200).json({error: 'worker exist in db'})
    // }
    const obj = {
        id: users[users.length-1].id +1,
        cash: 0,
        credit: 0
    }
    users.push(obj);

    //console.log("hello aya")
    console.log(obj)
    //console.log(req.body)
    //return res.send(req.body)
    return res.send(obj);
}

const getUser = (req,res)=>{

}

const getAllUsers = (req,res)=>{
    return res.send(users)
}

const getUserById =(req, res) =>{
    // const {Id} = req.params
    // let user = users.find((u) =>{
    //     return u.id == Id})
    // return user
    return res.status(200).json({users : users[req.params.id]})
}


module.exports = {
    getAllUsers,
    addUser,
    getUser,
    getUserById,
}