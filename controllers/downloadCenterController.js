const downloadCenter = require('../models/DownloadCenter')
const api = require('../utils/apiFactory')
const multer = require('multer')
const fs = require('fs')
const {sequelize} = require('../connection')
const Class = require('../models/Class')
const Section = require('../models/Section')

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./public/materials`);
  },
  filename: (req, file, cb) => {
    // const ext = file.mimetype.split("/")[1];
    cb(null, `${file.originalname}`);
    // cb(null, `${file.originalname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
}).single('content_file')


exports.createDownloadContent = async(req,res)=>{

  try {

    upload(req,res,async(err)=>{
  
      if(req.file){
      let pathArr = req.file.path.split("\\")
      req.body.content_file = pathArr.splice(pathArr.indexOf("public"),pathArr.length).join("/")
    
}

      await downloadCenter.create(req.body)

      res.status(200).json({
        status:'success',
        message:'File uploaded Successfully!',
      })

    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.getDownloadContent = async(req,res)=>{

  try {
    
    let data  = await downloadCenter.findAll({
      include:[
        {
          model:Class,
          attributes:['class']
        },
        {
          model:Section,
          attributes:['section']
        }
      ]
    })


  // let   new_data = data.map(content=>{
  //       let obj = {
  //         data:content
  //       }
  //     if(content.getDataValue('class')===null){
  //       obj.data.newclass = "All Classes"
  //   }  else 
  //       obj.data.newclass = {
  //         class : `${content.class.class}(${content.section.section})`
        
  //       }
       
  //       return obj
  //   })


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

exports.getFile = async(req,res)=>{

  try {

    let file = await downloadCenter.findByPk(req.params.id,{
      attributes:['content_file']
    })

    res.download(`${__dirname}/../${file.getDataValue('content_file')}`)

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.deleteContent = api.delete(downloadCenter)

exports.getcontents = async(req,res)=>{

  try {
    
    let data = await downloadCenter.findAll({
      where:{
        content_type:req.params.fileType
      },
      include:[
        {
          model:Class,
          attributes:['class']
        },
        {
          model:Section,
          attributes:['section']
        }
      ]
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


