const {sequelize} = require('../connection')
const Student = require('../models/student')
const {Op} = require('sequelize')
const multer = require('multer')
const Class = require('../models/Class')
const Section = require('../models/Section')

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null, `${__dirname}/../public/studentDetails` )
  },
  filename:function(req,file,cb){
   cb(null, file.originalname)
  }

})

const upload = multer({storage}).fields([{
  name:'student_photo',
  maxCount:1
},{
  name:'father_photo',
  maxCount:1
},{
  name:'mother_photo',
  maxCount:1
},{
  name:'guardian_photo',
  maxCount:1
}])

exports.getAllStudent = async(req,res)=>{
  try {

  let data = await Student.findAll({
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

exports.getStudent = async(req,res)=>{

  try {
    
    let student = await Student.findAll({where:{
      program_id:req.body.program,
       name: {
        [Op.like]: req.body.search,
      },
      roll_no:req.body.search,
      admission_no:req.body.search  
    }//where
  
  })

  res.status(200).json({
    status:'success',
    data:student
  })


  } catch (err) {
    res.status(400).json({
      status:'success',
      message:err.message
    })
  }

}

exports.createStudent = async(req,res)=>{
  try {

    upload(req,res,async(err)=>{

      if(err)
      return res.status(400).json({
        status:'fail',
        message:'Error uploading image!'
      })

      await Student.create(req.body)
      res.status(200).json({
        status:'success',
        message:'student added successfully!'
      })

    })

   
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.updateStudent = async(req,res)=>{
  try {
    await Student.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'student updated successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.deleteStudent = async(req,res)=>{
  try {

    await Student.destroy({where:{id:req.params.id}})
    
    res.status(200).json({
      status:'success',
      message:'student deleted successfully!'
    })
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.bulkDelete = async(req,res)=>{
  try {

    await Student.destroy({where:{
      program_id:req.body.program,
      id:req.query.id.split(',')
    }
    
  })

    res.status(200).json({
      status:'success',
      message:'Records Deleted Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      stauts:'fail',
      message:err.message
    })
  }
}

exports.disabledStudents = async(req,res)=>{
  try {

    let data = await Student.findAll({where:{
      program_id:req.body.program,
      dis_reason:{[Op.not]:null}
    }//where  
  })

  res.status(200).json({
    status:'success',
    data
  })

  } catch (err) {
    res.status(400).json({
      stauts:'fail',
      message:err.message
    })
  }
}