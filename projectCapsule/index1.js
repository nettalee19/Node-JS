const http = require("http")
const url = require("url")
const port = 8001;

const users = [
    {id:0, name:'netta', capsule: 4 },
    {id:1, name:'eyal', capsule: 4 },
    {id:2, name:'yosi', capsule: 4 },
    {id:3, name:'ayelet', capsule: 4 },
    {id:4, name:'adi', capsule: 4 },
    {id:5, name:'dima', capsule: 4 },
    {id:6, name:'david b', capsule: 4 },
    {id:7, name:'david s', capsule: 5 },
    {id:8, name:'netanel', capsule: 5 },
    {id:9, name:'mirale', capsule: 5 },
    {id:10, name:'yana', capsule: 5 },
    {id:11, name:'zehava', capsule: 5 },
    {id:12, name:'foad', capsule: 5 },
    {id:13, name:'toot', capsule: 5 },
    
]

const server = http.createServer((req, res) =>{
    const q = url.parse(req.url, true).query;
    console.log(q)
    if(req.method === "GET"){
        if(req.url === "/users"){
            //res.write("welcome here")
            res.write(JSON.stringify(users))
        } else if(req.url.includes('/users')){
            //res.write(JSON.stringify(users[q.id]))
            if(q.id){
                res.write(JSON.stringify(users.filter(u => u.id == q.id)))
            }
            else if(q.name){
                res.write(JSON.stringify(users.filter(u => u.name == q.name)))
            }
            else if(q.capsule){
                res.write(JSON.stringify(users.filter(u => u.capsule == q.capsule)))
            } 
        }
        
    }
    res.end()
})

server.listen(port, () =>{
    console.log('the port is ' + port)
})

