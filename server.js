const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.listen(8088, () => {
    console.log("server online.")
})
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
 
