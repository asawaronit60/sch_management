const User = require('../models/User')
const Student = require('../models/student')
const AppError = require('../utils/appError')
const multer = require('multer')
const { sendSmtpMail, sendAwsSesEmail } = require('../utils/mail')
const { emailTemplate } = require('../models/EmailSmsTemplate')
const { Op } = require('sequelize')
const fs = require('fs')
const { smtpEmailSetting, awsSesEmailSetting } = require('../models/EmailSettings')

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, './public/attachment')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }

})

const upload = multer({ storage }).single('attachment')



exports.sendEmailGroup = async (req, res, next) => {

  try {

    upload(req, res, async (err) => {


      if (!req.body.title)
        return next(new AppError('Title is required'), 400)

      if (!req.body.message)
        return next(new AppError('Message is required'), 400)


      if (req.body.email_template_id)
        var templateAttachment = await emailTemplate.findByPk(req.body.email_template_id)

      let attachments = []

      let attachmentsAws = []

      if (templateAttachment) {
        let templateDocument = templateAttachment.getDataValue('document')
        if (templateDocument) {

          attachments.push({ filename: templateAttachment.getDataValue('document_original_name'), path: `${__dirname}/../${templateAttachment.getDataValue('document')}` })

          attachmentsAws.push({ Filename: templateAttachment.getDataValue('document_original_name'), Content: `${__dirname}/../${templateAttachment.getDataValue('document')}`, ContentType: templateAttachment.getDataValue('document_type') })
        }

      }

      if (req.file) {
        let newDocument = `/public/attachment/${req.file.filename}`
        attachments.push({ filename: req.file.originalname, path: `${__dirname}/../${newDocument}` })

        attachmentsAws.push({ Filename: req.file.originalname, Content: fs.readFileSync(`${__dirname}/../${newDocument}`), ContentType: req.file.mimetype })

      }

      let roles
      if (req.body.type)
        roles = req.body.type.split(",").map(el => el.replace(/"/g, ''))
      else roles = []

      let designation_ids
      if (req.body.designation_id)
        designation_ids = req.body.designation_id.split(",").map(el => parseInt(el.replace(/"/g, '')))
      else designation_ids = []

      console.log(roles, designation_ids)

      let emails = await User.findAll({
        attributes: ['id', 'email'],
        where: {
          [Op.or]: {
            role: { [Op.in]: roles },
            staff_designation_id: { [Op.in]: designation_ids }
          }
        }
      })

      let smtp = await smtpEmailSetting.findByPk(1)
      let awsSes = await awsSesEmailSetting.findByPk(1)

      if (smtp.getDataValue('is_active') === true) {
        await sendSmtpMail({
          email: emails.map(e => e.getDataValue('email')),
          subject: req.body.title,
          message: req.body.message,
          attachments
        })

        res.status(200).json({
          status: 'success',
          message: 'Mail sent successfully!',
        })

      }

      else if (awsSes.getDataValue('is_active') === true) {

        await sendAwsSesEmail({
          email: emails.map(e => e.getDataValue('email')),
          subject: req.body.title,
          message: req.body.message,
          attachments: attachmentsAws
        })

        res.status(200).json({
          status: 'success',
          message: 'Mail sent successfully!',
        })

      }

      else {
        return next(new AppError('Please Select an Email Service', 400))
      }



    })

  } catch (err) {
    next(err)
  }

}


exports.sendEmailIndividual = async (req, res, next) => {

  try {

    upload(req, res, async (err) => {


      if (!req.body.title)
        return next(new AppError('Title is required'), 400)

      if (!req.body.message)
        return next(new AppError('Message is required'), 400)



      if (req.body.email_template_id)
        var templateAttachment = await emailTemplate.findByPk(req.body.email_template_id)

      let attachments = []

      let attachmentsAws = []

      if (templateAttachment) {
        let templateDocument = templateAttachment.getDataValue('document')
        if (templateDocument)
          attachments.push({ filename: templateAttachment.getDataValue('document_original_name'), path: `${__dirname}/../${templateAttachment.getDataValue('document')}` })
       attachmentsAws.push({ Filename: templateAttachment.getDataValue('document_original_name'), Content: `${__dirname}/../${templateAttachment.getDataValue('document')}`, ContentType: templateAttachment.getDataValue('document_type') })
      }

      if (req.file) {
        let newDocument = `/public/attachment/${req.file.filename}`
        attachments.push({ filename: req.file.originalname, path: `${__dirname}/../${newDocument}` })
      
        attachmentsAws.push({ Filename: req.file.originalname, Content: fs.readFileSync(`${__dirname}/../${newDocument}`), ContentType: req.file.mimetype })


      }


      let emails = await User.findAll({
        attributes: ['id', 'email'],
        where: {
          id: { [Op.in]: req.body.id }
        }

      })



      let smtp = await smtpEmailSetting.findByPk(1)
      let awsSes = await awsSesEmailSetting.findByPk(1)

      if (smtp.getDataValue('is_active') === true) {
      await sendSmtpMail({
        email: emails.map(e => e.getDataValue('email')),
        subject: req.body.title,
        message: req.body.message,
        attachments
      })


      res.status(200).json({
        status: 'success',
        message: 'Mail sent successfully!',
        data: emails
      })

    }

    else if(awsSes.getDataValue('is_active') === true){

      await sendAwsSesEmail({
        email: emails.map(e => e.getDataValue('email')),
        subject: req.body.title,
        message: req.body.message,
        attachments:attachmentsAws
      })


      res.status(200).json({
        status: 'success',
        message: 'Mail sent successfully!',
        data: emails
      })
     

    }

    else {
      return next(new AppError('Please Select an Email Service', 400))
    }


    })

  } catch (err) {
    next(err)
  }



}


exports.sendEmailClass = async (req, res, next) => {

  try {

    upload(req, res, async (err) => {

      if (!req.body.class_id)
        return next(new AppError('Class is required'), 400)

      if (!req.body.section_id)
        return next(new AppError('Section is required'), 400)


      if (!req.body.title)
        return next(new AppError('Title is required'), 400)

      if (!req.body.message)
        return next(new AppError('Message is required'), 400)


      if (req.body.email_template_id)
        var templateAttachment = await emailTemplate.findByPk(req.body.email_template_id)

      let attachments = []

      let attachmentsAws = []

      if (templateAttachment) {
        let templateDocument = templateAttachment.getDataValue('document')
        if (templateDocument)
          attachments.push({ filename: templateAttachment.getDataValue('document_original_name'), path: `${__dirname}/../${templateAttachment.getDataValue('document')}` })
          attachmentsAws.push({ Filename: templateAttachment.getDataValue('document_original_name'), Content: `${__dirname}/../${templateAttachment.getDataValue('document')}`, ContentType: templateAttachment.getDataValue('document_type') })
     
        }

      if (req.file) {
        let newDocument = `/public/attachment/${req.file.filename}`
        attachments.push({ filename: req.file.originalname, path: `${__dirname}/../${newDocument}` })

        attachmentsAws.push({ Filename: req.file.originalname, Content: fs.readFileSync(`${__dirname}/../${newDocument}`), ContentType: req.file.mimetype })   
      }


      let emails = await Student.findAll({
        attributes: ['id', 'email'],
        where: {
          class_id: req.body.class_id,
          section_id: req.body.section_id
        }
      })



  let smtp = await smtpEmailSetting.findByPk(1)
      let awsSes = await awsSesEmailSetting.findByPk(1)

      if (smtp.getDataValue('is_active') === true) {
      await sendSmtpMail({
        email: emails.map(e => e.getDataValue('email')),
        subject: req.body.title,
        message: req.body.message,
        attachments
      })


      res.status(200).json({
        status: 'success',
        message: 'Mail sent Successfully!'
      })
    }


    
    else if(awsSes.getDataValue('is_active') === true){
  
      await sendAwsSesEmail({
        email: emails.map(e => e.getDataValue('email')),
        subject: req.body.title,
        message: req.body.message,
        attachments:attachmentsAws
      })


      res.status(200).json({
        status: 'success',
        message: 'Mail sent Successfully!'
      })


    }

    else {
      return next(new AppError('Please Select an Email Service', 400))
    }


    })


  } catch (err) {
    next(err)
  }




}

exports.sendEmailTodayBirthDay = async (req, res, next) => {

  try {

    upload(req, res, async (err) => {


      if (!req.body.title)
        return next(new AppError('Title is required'), 400)

      if (!req.body.message)
        return next(new AppError('Message is required'), 400)

      if (req.body.email_template_id)
        var templateAttachment = await emailTemplate.findByPk(req.body.email_template_id)

      let attachments = []

      let attachmentsAws = []

      if (templateAttachment) {
        let templateDocument = templateAttachment.getDataValue('document')
        if (templateDocument)
          attachments.push({ filename: templateAttachment.getDataValue('document_original_name'), path: `${__dirname}/../${templateAttachment.getDataValue('document')}` })
          attachmentsAws.push({ Filename: templateAttachment.getDataValue('document_original_name'), Content: `${__dirname}/../${templateAttachment.getDataValue('document')}`, ContentType: templateAttachment.getDataValue('document_type') })
    
        }

      if (req.file) {
        let newDocument = `/public/attachment/${req.file.filename}`
        attachments.push({ filename: req.file.originalname, path: `${__dirname}/../${newDocument}` })
        
        attachmentsAws.push({ Filename: req.file.originalname, Content: fs.readFileSync(`${__dirname}/../${newDocument}`), ContentType: req.file.mimetype })   
    
      }




      let emails = await User.findAll({
        attributes: ['id', 'email'],
        where: {
          id: { [Op.in]: req.body.id }
        }
      })

    
    
  let smtp = await smtpEmailSetting.findByPk(1)
  let awsSes = await awsSesEmailSetting.findByPk(1)

  if (smtp.getDataValue('is_active') === true) {
      await sendSmtpMail({
        email: emails.map(e => e.getDataValue('email')),
        subject: req.body.title,
        message: req.body.message,
        attachments
      })

      res.status(200).json({
        status: 'success',
        message:'Mail Sent!'
      })


    }

    else if(awsSes.getDataValue('is_active') === true){


      await sendAwsSesEmail({
        email: emails.map(e => e.getDataValue('email')),
        subject: req.body.title,
        message: req.body.message,
        attachments:attachmentsAws
      })

      res.status(200).json({
        status: 'success',
        message:'Mail Sent!'
      })


    }
    



    })

  } catch (err) {
    next(err)
  }


}





exports.sendLoginCredential = async (req, res, next) => {

  try {


    if (!req.body.type)
      return next(new AppError('type is required'), 400)

    if (!req.body.type == 'student' || !req.body.type == 'parent')
      return next(new AppError('Incorrect type value', 400))

    if (!req.body.id)
      return next(new AppError('student id is required!', 400))

    if (!Array.isArray(req.body.id))
      return next(new AppError('Id should be a list', 400))

    let attrib = ['id']


    if (req.body.type === 'student')
      attrib.push('email')
    else if (req.body.type === 'parent')
      attrib.push('gaurdian_email')

    //   else if (req.body.type === 'both') {
    //     attrib.push('email') 
    //     attrib.push('gaurdian_email')
    // }

    let students = await Student.findAll({
      attributes: ['id','email','admission_no' , 'fullname','gaurdian_email'],
      where: {
        id: { [Op.in]: req.body.id }
      }
    })

        
  let smtp = await smtpEmailSetting.findByPk(1)
  let awsSes = await awsSesEmailSetting.findByPk(1)

  if(smtp.getDataValue('is_active')===true)
    for (const st of students) {
      let emails = []

      if (req.body.type === 'student') {
        emails.push(st.getDataValue('email'))
      }

      else if (req.body.type === 'parent') {
        emails.push(st.getDataValue('gaurdian_email'))
      }

      // else if(type ==='both'){
      //   emails.push(st.getDataValue('email'))
      //   emails.push(st.getDataValue('gaurdian_email'))
      // }

      let user = await User.findOne({ where: { user_id: st.getDataValue('id') } })

      if (emails.length > 0 && user )
        await sendSmtpMail({
          email: emails,
          subject: 'Login Credentials',
          message: `Here are your login credentials email ${emails[0]} and password is : ${user.getDataValue('original_password')}`,
          type: 'login_credentials'
        })


    }

    else if(awsSes.getDataValue('is_active')===true)
    for (const st of students) {
      let emails = []

      if (req.body.type === 'student') {
        emails.push(st.getDataValue('email'))
      }

      else if (req.body.type === 'parent') {
        emails.push(st.getDataValue('gaurdian_email'))
      }

      else if(type ==='both'){
        emails.push(st.getDataValue('email'))
        emails.push(st.getDataValue('gaurdian_email'))
      }

      let user = await User.findOne({ where: { user_id: st.getDataValue('id') } })

      if (emails.length > 0 && user )
        await sendAwsSesEmail({
          email: emails,
          subject: 'Login Credentials',
          message: `Here are your login credentials email for student ${st.getDataValue('fullname')} is ${emails[0]} and password is : ${user.getDataValue('original_password')}`,
          type: 'login_credentials'
        })


    }


    else{
      return next(new AppError('Please Select  email service from email settings',400))
    }


    
    res.status(200).json({
      status: 'success',
      message: 'Mail Sent successfully!'
    })


  } catch (err) {
    next(err)
  }

}






exports.getBirthdayUsers = async (req, res, next) => {

  try {
      // if (!req.body.id)
      //   return next(new AppError('Id are required!', 400))


      const today = new Date();

      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');

      const todayDate = `${year}-${month}-${day}`;

      console.log(formattedDate);



      let users = await User.findAll({
        attributes: ['id', 'name', 'email','role'],
        where: {
          date_of_birth: todayDate
        }
      })

      res.status(200).json({
        status: 'success',
        data: users
      })

  } catch (err) {
    next(err)
  }



}