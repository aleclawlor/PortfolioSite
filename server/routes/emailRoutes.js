const dotenv = require('dotenv')
const nodemailer = require('nodemailer')
const express = require('express')

const router = express.Router()

dotenv.config()

// send an email
router.post('/sendEmail', async(req, res) => {

    console.log("User attempts to send an email")

    // destructure request object
    const { name, email, body } = req.body

    // construct transporter 
    const transporter = nodemailer.createTransport({
        host: 'smtp.elasticemail.com',
        secure: false,
        auth: {
            user: 'acl.lawlor@gmail.com',
            pass: process.env.ELASTIC_EMAIL_PASSWORD,
        },
    })

    let info = await transporter.sendMail({
        from: 'acl.lawlor@gmail.com',
        to: 'lawlorab@bc.edu',
        subject: `Portfolio Site: ${name} (${email})`,
        text: body
    })

    console.log('message sent: ', info.messageId)

    res.json(info)

})

console.log(router)
module.exports = router 