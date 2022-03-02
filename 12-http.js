const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req)
    if(req.url === '/'){
        res.end('this is my home page')
    }

    if(req.url ==='/about'){
        res.end('This is my about page')
    }

    res.end(`<h1>This is 404 page</h1>
    <p>There is a mistake</p>
    <a href='/'> go to our home page</a>`)
})

server.listen(8080)