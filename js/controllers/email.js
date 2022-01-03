// send an email by triggering an endpoint on the backend
sendEmail = async(name, email, body) => {

    try{

        const res = await fetch('localhost:8000/api/email/sendEmail', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                body: body
            })
        })

        return res.json()

    }

    catch(e){

        console.log("Error sending email: ", e)

    }

}
