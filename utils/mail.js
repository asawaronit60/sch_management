/* This code is defining a function called `sendMail` that uses the `nodemailer` library to send an
email. The function takes an `options` object as a parameter, which contains the email address of
the recipient, the subject of the email, and the message body. The function creates a `transporter`
object using the SMTP credentials of a mail service provider (in this case, Mailtrap), and then uses
the `transporter` object to send the email using the `sendMail` method. The function also logs the
HTML content of the email to the console. Finally, the function is exported so that it can be used
in other parts of the codebase. */


const nodemailer = require('nodemailer')

 const sendMail = async options => {

  let transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ae9b023e5134a6",
      pass: "f1c1c69a109acf"  
    }

  });

  

  let info = await transporter.sendMail({
    from: "My School", // sender address
    to:options.email, // list of receivers
    subject: options.subject,
    text:options.message,
    attachments:[
      {
        filename:'',
        path:options.path
      }
    ]
  });

  console.log(options)
  
}


const sendCredentialsMail = async options => {

  let transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ae9b023e5134a6",
      pass: "f1c1c69a109acf"  
    }

  });

  // let info = await transporter.sendMail({
  //   from: "My School", 
  //   to:options.email, 
  //   subject: options.subject,
  //   text:options.message
  // })

  console.log( options)
  
}


module.exports = {sendMail , sendCredentialsMail}