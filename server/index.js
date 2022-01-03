const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')

const app = express()

app
    .use(express.urlencoded({ extended : true }))
    .use(express.json())
    .use(cors())
    .use('/api/', routes)

const PORT = process.env.PORT || 8000 

app.listen(PORT, () => {

    console.log("Listening on port: ", PORT)
    
})