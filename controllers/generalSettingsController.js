const multer = require('multer')
const {generalSetting,studentGaurdianPannel,feeSetting,attendenceTypeSetting,idGenerationSetting} = require('../models/GeneralSetting')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../public/generalSettings`)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage }).fields([
  { name: 'print_logo', maxCount: 1 },
  { name: 'admin_logo', maxCount: 1 },
  { name: 'admin_small_logo', maxCount: 1 },
  { name: 'app_logo', maxCount: 1 }
])

const getData = (Model) => async(req,res,next)=>{
  try {

    let data = await Model.findByPk(1)

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

const updateData = (Model) => async(req,res,next)=>{

  try {

    await Model.update(req.body,{where:{id:1}})

    res.status(200).json({
      status:'succes',
      message:'updated'
    })
  } catch (err) {
    next(err)
  }

}

exports.getGeneralSetting = getData(generalSetting)


exports.updateGeneralSetting = async (req, res, next) => {

  try {

    upload(req, res, async (err) => {

      if (err)
        return res.status(400).json({
          status: 'fail',
          message: 'Error uploading file!'
        })

      if (req.files.print_logo) {
        req.body.print_logo = `/public/generalSettings/${req.files.print_logo[0].filename}`
      }

      if (req.files.admin_logo) {
        req.body.admin_logo = `/public/generalSettings/${req.files.admin_logo[0].filename}`
      }

      if (req.files.admin_small_logo) {
        req.body.admin_small_logo = `/public/generalSettings/${req.files.admin_small_logo[0].filename}`
      }

      if (req.files.app_logo) {
        req.body.app_logo = `/public/generalSettings/${req.files.app_logo[0].filename}`
      }


      await generalSetting.update(req.body, {
        where: {
          id:1
        }
      })

      res.status(200).json({
        status: 'success',
        message: 'General settings updated succesfully!'
      })

    })


  } catch (err) {
   next(err)
  }

}

exports.getStudentGaurdianPannel = getData(studentGaurdianPannel)
exports.updateStudentGaurdianPannel = updateData(studentGaurdianPannel)


exports.getFeeSetting = getData(feeSetting)
exports.updateFeeSetting = updateData(feeSetting)

exports.getAttendenceTypeSetting = getData(attendenceTypeSetting)
exports.updateAttendenceTypeSetting = updateData(attendenceTypeSetting)

exports.getIdGenerationSetting = getData(idGenerationSetting)
exports.updateIdGenerationSetting = updateData(idGenerationSetting)