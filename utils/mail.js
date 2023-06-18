/* This code is defining a function called `sendMail` that uses the `nodemailer` library to send an
email. The function takes an `options` object as a parameter, which contains the email address of
the recipient, the subject of the email, and the message body. The function creates a `transporter`
object using the SMTP credentials of a mail service provider (in this case, Mailtrap), and then uses
the `transporter` object to send the email using the `sendMail` method. The function also logs the
HTML content of the email to the console. Finally, the function is exported so that it can be used
in other parts of the codebase. */
const AWS = require('aws-sdk')
const { smtpEmailSetting, awsSesEmailSetting } = require('../models/EmailSettings')
const nodemailer = require('nodemailer');
const { generalSetting } = require('../models/GeneralSetting');




const sendSmtpMail = async (options) => {


  try {
    let smtp = await smtpEmailSetting.findByPk(1);

    let sch = await generalSetting.findByPk(1)

    let transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ae9b023e5134a6",
        pass: "f1c1c69a109acf"
      }
    });

    let mailObject = {}

    mailObject.from = sch.getDataValue('name')
    mailObject.to = options.email
    mailObject.subject = options.subject
    mailObject.text = options.message

    if (!options.type)
      mailObject.attachments = options.attachments

    // let info = await transporter.sendMail(mailObject);

    console.log(mailObject)

  } catch (err) {
    console.log(err)
  }


}



const sendAwsSesEmail = async (options) => {


  try {

    let awsCredentials = await awsSesEmailSetting.findByPk(1)

    const SES_CONFIG = {
      accessKeyId: awsCredentials.getDataValue('access_id_key') ,
      secretAccessKey:awsCredentials.getDataValue('secret_access_key') ,
      region:awsCredentials.getDataValue('region')  
    };

    let params = {
      Destination: {
        ToAddresses: options.email
      },
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: options.message
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: options.subject
        }
      },
      Source: awsCredentials.getDataValue('email'),

    };

    if(!options.type)
      params.Attachments = options.attachments


    // const sendPromise = new AWS.SES(SES_CONFIG).sendEmail(params).promise()

    // sendPromise.then((data) => {
    //   console.log('Message Send')
    // })
    //   .catch(err => {
    //     console.log(err)
    //   })


  } catch (err) {
    console.log(err)
  }


}



module.exports = { sendSmtpMail, sendAwsSesEmail }