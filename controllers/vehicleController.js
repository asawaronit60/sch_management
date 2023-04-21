const Vehicle = require('../models/Vehicle')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,`${__dirname}/../public/vehicle`)
  },
  filename:function(req,file,cb){
    cb(null,`vehicle-${Date.now()}-${path.extname(file.originalname)}`)
  }

})

const upload = multer({storage}).single('vehicle_photo')

exports.getAllVehicle = async(req,res,next)=>{
  try {
    
    let data = await Vehicle.findAll()

    res.status(200).json({
      status:'fail',
      data
    })
  } catch (err) {
    next(err)
  }
}

exports.createVehicle = async(req,res,next)=>{
  try {
    
    upload(req,res,async(err)=>{

        if(req.file)
          req.body.vehicle_photo = `public/vehicle/${req.file.filename}`

        await Vehicle.create(req.body)

        res.status(200).json({
          status:'success',
          message:'Vehicle added!'
        })

    })


  } catch (err) {
    next(err)
  }
}

exports.deleteVehicle = async(req,res,next)=>{
  try {
    
    await Vehicle.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Vehicle deleted!'
    })

  } catch (err) {

    next(err)
  }
}


exports.updateVehicle = async(req,res,next)=>{
  try {
    
    upload(req,res,async(err)=>{
        
        if(req.file)
          req.body.vehicle_photo = `public/vehicle/${req.file.filename}`

        await Vehicle.update(req.body,{
          where:{
            id:req.params.id
          }
        })

        res.status(200).json({
          status:'success',
          message:'Vehicle updated!'
        })

    })


  } catch (err) {
    next(err)
  }
}