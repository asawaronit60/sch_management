const IdCard = require('../models/IdCard')
const api = require('../utils/apiFactory');
const { sequelize } = require('../connection');
const AppError = require('../utils/AppError');
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
  
  destination:function(req,file,cb){
    cb(null,`${__dirname}/../public/certificates/idCard`)
  },
  filename:function(req,file,cb){
    console.log("file name",`idCard-${Date.now()}-${path.extname(file.originalname)}`)
    cb(null,  `idCard-${Date.now()}${path.extname(file.originalname)}`)
  }
  
})

const uploads = multer({storage}).fields([
  {name:'background',maxCount:1},
  {name:'logo',maxCount:1},
  {name:'sign_image',maxCount:1}
])



exports.getAllIdCards = api.getAll(IdCard)


exports.createIdCards = async (req, res, next) => {
  try {

    uploads(req, res, async (err) => {

      if (err)
        return next(new AppError('error uploading image!', 500))

      if (req.files.background)
        req.body.background = 'public/certificates/idCard/' + req.files.background[0].filename
      if (req.files.logo)
        req.body.logo = 'public/certificates/idCard/' + req.files.logo[0].filename
      if (req.files.sign_image)
        req.body.sign_image = 'public/certificates/idCard/' + req.files.sign_image[0].filename

      await IdCard.create(req.body)

      res.status(200).json({
        status: 'success',
        message: 'Id card created successfully!',
        data: req.body
      })

    })


  } catch (err) {
    next(err)
  }
}


exports.deleteIdCards = api.delete(IdCard)
exports.updateIdCards = async (req, res, next) => {
  try {

    uploads(req,res,async(err)=>{

      if (err){
        console.log(err)
        return next(new AppError('error uploading image!'+err, 500))
}
      if (req.files.background)
        req.body.background = 'public/certificates/idCard/' + req.files.background[0].filename
      if (req.files.logo)
        req.body.logo = 'public/certificates/idCard/' + req.files.logo[0].filename
      if (req.files.sign_image)
        req.body.sign_image = 'public/certificates/idCard/' + req.files.sign_image[0].filename

      await IdCard.update(req.body,{
        where:{
          id:req.params.id
        }
      })

      res.status(200).json({
        status: 'success',
        message: 'Id card updated successfully!',
        data: req.body
      })

    })


  } catch (err) {
    next(err)
  }
}


exports.searchGenerateIdCard = async (req, res) => {

  try {

    let [results] = await sequelize.query(`

    select  st.fullname , pg.class , st.father_name,st.dob , st.gender from
    students as st  , classes as pg where
    st.program_id = ? and
    st.intake_id = ? and
    st.program_id = pg.id 
  
   `, {
      replacements: [req.body.program_id, req.body.intake_id]
    }
    )

    res.status(200).json({
      status: 'success',
      data: results
    })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }

}