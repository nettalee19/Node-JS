const http = require("http")
const url = require("url")
const port = 8001;
const users = require('./users.json')


const server = http.createServer((req, res) =>{
    const q = url.parse(req.url, true).query;
    console.log(q)
    if(req.method === "GET"){
        if(req.url === "/users"){
            //res.write("welcome here")
            res.write(JSON.stringify(users.users))
        } 
        
        else if(req.url.includes('/users')){
            //res.write(JSON.stringify(users[q.id]))
            if(q.id){
                res.write(JSON.stringify(users.users.filter(u => u.id == q.id)))
            }
            else if(q.name){
                res.write(JSON.stringify(users.users.filter(u => u.name == q.name)))
            }
            else if(q.capsule){
                res.write(JSON.stringify(users.users.filter(u => u.capsule == q.capsule)))
            } 
        }
        
    }
    res.end()
})

server.listen(port, () =>{
    console.log('the port is ' + port)
})

