const nameInput = document.getElementById('nameInput')
const emailInput = document.getElementById('emailInput')
const bodyInput = document.getElementById('emailBodyInput')

// add text change handlers to input tags 
nameInput.addEventListener('input', e => {

    const inputValue = e.target.value 
    nameInput.setAttribute('value', inputValue)

})

emailInput.addEventListener('input', e => {

    const inputValue = e.target.value 
    emailInput.setAttribute('value', inputValue)

})

bodyInput.addEventListener('input', e => {

    const inputValue = e.target.value 
    console.log('input value: ', inputValue)
    bodyInput.setAttribute('value', inputValue)

})


// get the submit button under contact form and bind sendEmail function to it
const submitButton = document.querySelector('#submitButton')
submitButton.addEventListener('click', e => {

    sendEmail()

})


// send email using SMTP
const sendEmail = () => {

    const email = emailInput.value
    const name = nameInput.value 
    const body = bodyInput.value    
    console.log(email, name, body)

    // port: 2525

    Email.send({
        Host: 'smtp.elasticemail.com',
        Username: 'acl.lawlor@gmail.com',
        Password: '9D16E99F9534923F63DBE562068A92E75397',
        To: 'lawlorab@bc.edu',
        From: 'acl.lawlor@gmail.com',
        Subject: `IMPORTANT: Portfolio Site Message from ${name} (Email: ${email})`,
        Body: body
    }).then(message => {
        console.log(message)

        if (message == "OK"){

            // clear the value of the fields after the email is sent
            nameInput.value=""
            emailInput.value=""
            bodyInput.value=""

            alert("Message Sent Successfully")
        }

        else{
            alert("There was an issue sending the message. Please try again later.")
        }
    })

}