const express = require('express')
const router = express.Router()

const emailRoutes = require('./emailRoutes')

router.use('/email', emailRoutes)

if(process.env.NODE_ENV === 'production'){

    app.use(express.static('portfolio-site'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'index.html'))
    })
}

module.exports = router 