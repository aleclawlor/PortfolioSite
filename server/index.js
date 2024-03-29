const express = require('express')
const http = require('http')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const routes = require('./routes/index')

const app = express()

app
    .use(express.urlencoded({ extended : true }))
    .use(express.json())
    .use(cors())
    .use('/api/', routes)

const PORT = process.env.PORT || 8000 

// if(process.env.NODE_ENV === 'production'){

//     app.use(express.static('portfolio-site'))

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'index.html'))
//     })
// }

app.use('/', express.static(path.join(__dirname, '../')))
app.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(PORT, () => {
    console.log("Listening on port: ", PORT)    
})

