const express = require ("express")
const bodyParser = require("body-parser")
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

function sendMail(email){
    const msg = {
        to: email,
        from: 'hugh.cameron102@gmail.com',
        subject: 'Welcome to DEV@Deakin',
        text: 'Thanks for signing up!',
        }
        
        sgMail.send(msg).then(() => {
            console.log('Email sent')
          })
          .catch((error) => {
            console.error(error)
          })
}

app.post('/', (req,res) =>{
    var email = req.body.email;
    sendMail(email);
})

app.listen(8080, (req,res)=>{
    console.log("Server is running on port 8080")
})