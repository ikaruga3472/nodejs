const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.listen(8088, () => {
    console.log("server online.")
})
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
 
const { MongoClient } = require('mongodb')

let db
const url = 'mongodb사이트에 있던 님들의 DB 접속 URL'
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum')
}).catch((err)=>{
  console.log(err)
})