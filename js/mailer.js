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
    console.log(res)

})