const User = require('../models/User')
const Student = require('../models/student')
const AppError = require('../utils/appError')
const multer = require('multer')
const { sendMail, sendCredentialsMail } = require('../utils/mail')
const { emailTemplate } = require('../models/EmailSmsTemplate')
const { Op } = require('sequelize')


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



  } catch (err) {
    next(err)
  }




}


exports.sendEmailIndividual = async (req, res, next) => {

  try {






  } catch (err) {
    next(err)
  }




}


exports.sendEmailClass = async (req, res, next) => {

  try {


    let emails = await Student.findAll({
      attributes: ['id', 'email'],
      where: {
        class_id: req.body.class_id,
        section_id: req.body.section_id
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

        if(req.body.email_template_id)
         var templateAttachment = await emailTemplate.findByPk(req.body.email_template_id)

      let attachments = []

      if (templateAttachment) {
        let templateDocument = templateAttachment.getDataValue('document')
        if (templateDocument)
          attachments.push({ filename: templateAttachment.getDataValue('document_original_name'), path: `${__dirname}/../${req.query.path}` })
      }

      if (req.file) {
        let newDocument = `/public/attachment/${req.file.filename}`
        attachments.push({ filename:req.file.originalname , path: `${__dirname}/../${newDocument}` })
      }




      let emails = await User.findAll({
        attributes: ['id', 'email'],
        where: {
          id: { [Op.in]: req.body.id }
        }
      })

      await sendMail({
        email: emails.map(e => e.getDataValue('email')),
        subject: req.body.title,
        message: req.body.message,
        attachments
      })

      res.status(200).json({

        status: 'success',
        data: {
          emails,
          body: req.body
        }

      })


    })

  } catch (err) {
    next(err)
  }


}

exports.getBirthdayUsers = async (req, res, next) => {

  try {

    upload(req, res, async (err) => {


      if (!req.body.id)
        return next(new AppError('Id are required!', 400))


      const today = new Date();

      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');

      const todayDate = `${year}-${month}-${day}`;

      console.log(formattedDate);



      let users = await User.findAll({
        attributes: ['id', 'name', 'email'],
        where: {
          date_of_birth: todayDate
        }
      })

      res.status(200).json({
        status: 'success',
        data: users
      })


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
      attributes: attrib,
      where: {
        id: { [Op.in]: req.body.id }
      }
    })


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

      if (emails.length > 0 && user)
        await sendCredentialsMail({
          email: emails,
          subject: 'Login Credentials',
          message: `Here are your login credentials email ${emails[0]} and password is : ${user.getDataValue('original_password')}`

        })


    }

    res.status(200).json({
      status: 'success',
      message: 'Mail Sent successfully!'
    })


  } catch (err) {
    next(err)
  }

}