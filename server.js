var jsonServer = require('json-server')

var server = jsonServer.create()
var router = jsonServer.router('db.json')

server.use(jsonServer.defaults)
server.use(router)

server.listen(3000)