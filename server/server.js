const http = require('http')
const app = require('./app')

port = process.env.PORT || 3002

hostname = '127.0.0.1'

const server = http.createServer(app)

server.listen(port, hostname, ()=>{
	console.log(`server is listening on http://${hostname}:${port}` )
})
