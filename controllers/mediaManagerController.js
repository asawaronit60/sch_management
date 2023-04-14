const mediaManager = require('../models/MediaManager')
const frontCmsBanner = require('../models/FrontCmsBanner')
const multer = require('multer')
const fs = require('fs')
const {Op} = require('sequelize')

const storage = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null, `${__dirname}/../public/mediaManager` )
  },
  filename:function(req,file,cb){
   cb(null, file.originalname)
  }
})


const upload = multer({storage}).single('file')

exports.getAllMedia = async(req,res,next)=>{

  try {
    
    let data = await mediaManager.findAll()

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }

}

exports.createMedia = async(req,res,next)=>{

  try {
    
    upload(req,res,async(err)=>{

        if(err)
        return res.status(400).json({
          status:'fail',
          message:'Error uploading file'+err.message
        })


        if(req.file){
          console.log(req.file)
         
         let ar = req.file.path.split("\\")
         req.body.file = ar.slice(ar.length-3).join("/")
        
}

        await mediaManager.create(req.body)

        res.status(200).json({
          status:'success',
          message:'File uploaded successfully!',
        })

    })


  } catch (err) {
    next(err)
  }


}

exports.deleteMediaManager = async(req,res,next)=>{

  try {
    
    let id =  req.params.id

    let media = await mediaManager.findByPk(id)

   await mediaManager.destroy({where:{id}})

  await frontCmsBanner.destroy({
    where:{
      image:media.getDataValue('file')
    }
  })


    res.status(200).json({
      status:'success',
      message:'Media deleted Successdully!'
    })

    

    fs.unlink(media.getDataValue('file'),(err)=>{
      if(err)
      console.log('error deleting file')
      else console.log('file deleted successfully!')
    })
    
  } catch (err) {
    next(err)
  }

}


exports.updateMedia = async(req,res,next)=>{

  try {

    upload(req,res,async(err)=>{

      let media

      if(req.file){
        media = await mediaManager.findByPk(req.params.id)

        req.body.file_type = req.file.mimetype.split('/')[0] 
        
        let pathArr = req.file.path.split("\\")
        req.body.file = pathArr.splice(pathArr.indexOf("public"),pathArr.length).join("/")
      }

      await mediaManager.update(req.body,{where:{id:req.params.id}})

      res.status(200).json({
        status:'success',
        message:'Media updated Successdully!',
      })


      fs.unlink(media.getDataValue('file'),(err)=>{
        if(err)
        console.log('error deleting file')
        else console.log('file deleted successfully!')
      })

    })


  } catch (err) {
  next(err)
  }


}


exports.getMedia = async(req,res)=>{

  try {

    let data = await mediaManager.findAll({
      attributes:['file']
    })

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}


exports.search = async(req,res)=>{

  try {

    let name = req.params.name

    let data = await mediaManager.findAll({
      where:{
        file:{[Op.like]:`%${name}%`}
      }
    })


    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.messsage
    })
  }

}

exports.searchFileType = async(req,res)=>{

  try {

    let data  = await mediaManager.findAll({
      where:{
        file_type:req.params.type
      }
    })

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.messsage
    })
  }

}