const nameInput = document.querySelector('#nameInput')
const emailInput = document.querySelector('#emailInput')
const bodyInput = document.querySelector('#emailBodyInput')

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

    Email.send({
        Host: 'smtp.gmail.com',
        Username: 'acl.lawlor@gmail.com',
        Password: '$PiderMonkey1818',
        To: 'lawlorab@bc.edu',
        From: 'acl.lawlor@gmail.com',
        Subject: `IMPORTANT: Portfolio Site Message from ${name} (Email: ${email})`,
        Body: body
    }).then(message => {
        console.log(message)
        alert("Message Sent Successfully!")
    })

}