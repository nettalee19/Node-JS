const http = require("http")
const url = require("url")
const port = 8001;

const users = [
    {id:0, name:'netta'},
    {id:1, name:'aya'},
]

const server = http.createServer((req, res) =>{
    const q = url.parse(req.url, true).query;
    console.log(q)
    if(req.method === "GET"){
        if(req.url === "/users"){
            //res.write("welcome here")
            res.write(JSON.stringify(users))
        } else if(req.url.includes('/user')){
            res.write(JSON.stringify(users[q.id]))
        }
    }
    res.end()
})

server.listen(port, () =>{
    console.log('the port is ' + port)
})

