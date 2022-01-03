const express = require('express')
const router = express.Router()

const emailRoutes = require('./emailRoutes')

router.use('/email', emailRoutes)

if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

module.exports = router 