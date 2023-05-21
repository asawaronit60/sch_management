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

    // host: "smtp.mailgun.org",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    // auth: {
    //   user: 'postmaster@sandbox67806143fbd94823b3992cac0f627c5b.mailgun.org', // generated ethereal user
    //   pass: '32472e7d2b736c50f4c99683081ebd2b-0be3b63b-32f61518', // generated ethereal password
    // },
  });

  let info = await transporter.sendMail({
    from: "My School", // sender address
    to:options.email, // list of receivers
    subject: options.subject || "not working!", // Subject line
    text:options.message,
    html
  });

  console.log(html)
  
}

module.exports = sendMail