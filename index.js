

const http = require('http')
const express = require('express')
const port = 3000
const app = express()
const today = new Date();
const time = today.getHours() + ":" + today.getSeconds();

const server = http.createServer(function(req, res) {
res.write('mariam')
res.end()
})
app.get('/', (req, res) => res.send('ok')) 
app.get('/test', (req, res) => res.send({status:200, message:"ok"}))
app.get('/time', (req, res) => res.send({status:200, message: time}))
app.get('/hello/<ID>', (req, res) => res.send({status:200, message:"Hello, <ID>"}))



server.listen(port, function(error) {
if (error) {
    console.log('Something went wrong', error)
} else {
    console.log('Server is listening on port ' + port)
}
})
