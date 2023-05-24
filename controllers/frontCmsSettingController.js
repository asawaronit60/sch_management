const frontCMSSetting = require('../models/FrontCmsSetting')
const multer = require('multer')

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'./public/frontCmsSettings')
  },
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})
const upload = multer({storage}).fields([
  {name:'logo',maxCount:1},
  {name:'fav_icon',maxCount:1}
])

exports.getFrontCmsSetting = async(req,res,next)=>{
  try {
    let data = await frontCMSSetting.findByPk(1)
    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.updateFrontCmsSetting = async(req,res,next)=>{
  try {

    upload(req,res,async(err)=>{
      console.log(req.files)
      if(req.files.logo)
      req.body.logo =  `/public/frontCmsSettings/${req.files.logo[0].filename}`
    
      
      if(req.files.fav_icon)
      req.body.fav_icon =  `/public/frontCmsSettings/${req.files.fav_icon[0].filename}`
    
      await frontCMSSetting.update(req.body,{where:{id:1}})
    
    
     res.status(200).json({
        status:'success',
        message:'Updated successfully!'
      })
    })


  } catch (err) {
    next(err)
  }
}