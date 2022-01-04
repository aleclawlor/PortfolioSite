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
    bodyInput.setAttribute('value', inputValue)

})

// get the submit button under contact form and bind sendEmail function to it
const submitButton = document.querySelector('#submitButton')

// trigger an alert saying that an email was sent successfully
const triggerEmailSuccessAlert = () => {

    console.log("Successfully sent email")

    const submitButtonContainer = document.getElementById('submitButtonContainer')
    console.log(submitButton)

    submitButtonContainer.innerHTML = '<p>Email sent successfully!</p>'

    setTimeout(() => {
        submitButtonContainer.innerHTML=''
        submitButtonContainer.appendChild(submitButton)
    }, 4000)

}

// trigger an alert saying that an email failed to send
const triggerEmailFailureAlert = () => {

    console.log("Failed to send email")

    const submitButtonContainer = document.getElementById('submitButtonContainer')
    console.log(submitButton)

    submitButtonContainer.innerHTML = '<p>Email Failed To Send. Please try again later.</p>'

    setTimeout(() => {
        submitButtonContainer.innerHTML=''
        submitButtonContainer.appendChild(submitButton)
    }, 4000)
    

}


submitButton.addEventListener('click', async(e) => {

    const email = emailInput.value
    const name = nameInput.value 
    const body = bodyInput.value  

    const res = await axios.post('/api/email/sendEmail', {
        name: name,
        email: email,
        body: body
    })

    // use the response object to control what to show the user
    if (res.status == 200){

        triggerEmailSuccessAlert()

    }

    // something went wrong with the request to send the email
    else {

        triggerEmailFailureAlert()

    }

    emailInput.value = ''
    nameInput.value = ''
    bodyInput.value = ''

})