const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    const data = {
        name: 'Jose Carlos',
        lastName: 'Marrufo',
        girlfriend: null,
        doggy: 'coki (:',
        status: 'happy'
    }
    res.write(JSON.stringify(data))
    res.end()
})

server.listen(8080, () => {
    console.log('server on port 8080');
})