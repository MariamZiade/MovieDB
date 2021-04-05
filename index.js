const http = require('http')
const PORT = 3000

const server = http.createServer(function(req, res) {
res.send('ok')
res.end()
})

server.listen(PORT, function(error) {
if (error) {
    console.log('Something went wrong', error)
} else {
    console.log('Server is listening on port ' + PORT)
}
})
