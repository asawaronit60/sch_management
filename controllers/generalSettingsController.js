const multer = require('multer')
const GeneralSetting = require('../models/GeneralSetting')
const ApiFactory = require('../utils/apiFactory')
const AppError = require('../utils/AppError')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public/generalSettings`)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage }).fields([
  { name: 'logo', maxCount: 1 },
  { name: 'favicon', maxCount: 1 }
])

exports.getAllGeneralSetting = ApiFactory.getAll(GeneralSetting)

exports.createGeneralSetting = async (req, res, next) => {


  upload(req, res, async (err) => {

    try {

      if (err)
        return next(new AppError('error uploading file please try again', 500))

      if (req.files.logo) {
        let pathArr = req.files.logo[0].path.split("\\")

        let path = pathArr.splice(pathArr.indexOf("assets"), pathArr.length).join("/")

        req.body.logo = path
      }

      if (req.files.favicon) {
        let pathArr = req.files.favicon[0].path.split("\\")

        let path = pathArr.splice(pathArr.indexOf("assets"), pathArr.length).join("/")

        req.body.favicon = path
      }



      console.log(req.body)

      await GeneralSetting.create(req.body)


      res.status(200).json({
        status: 'success',
        message: 'General settings created succesfully!'
      })



    } catch (err) {
      next(err)
    }

  })//upload



}
exports.deleteGeneralSetting = ApiFactory.delete(GeneralSetting)

exports.updateGeneralSetting = async (req, res, next) => {

  try {

    upload(req, res, async (err) => {

      if (err)
        return res.status(400).json({
          status: 'fail',
          message: 'Error uploading file!'
        })

      if (req.files.logo) {
        let pathArr = req.files.logo[0].path.split("\\")

        let path = pathArr.splice(pathArr.indexOf("assets"), pathArr.length).join("/")

        req.body.logo = path
      }

      if (req.files.favicon) {
        let pathArr = req.files.favicon[0].path.split("\\")

        let path = pathArr.splice(pathArr.indexOf("assets"), pathArr.length).join("/")

        req.body.favicon = path
      }

      await GeneralSetting.update(req.body, {
        where: {
          id: Number(req.params.id)
        }
      })

      res.status(200).json({
        status: 'success',
        message: 'General settings updated succesfully!'
      })

    })


  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }

}