const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('age', 17)
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        age: 16
    })
    res.end(JSON.stringify({
        data: 'hello world'
    }))
})

server.on('error', err => console.log(err))

server.listen(8082)