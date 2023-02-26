const Class = require('../models/Class')
const Section = require('../models/Section')
const Student = require('../models/student')

exports.getClassSectionStudent = async(req,res)=>{

  try {
    
    let data = await Student.findAll({
      attributes:['id','id_no','firstname','dob','mobileno'],
      where:{
        class_id:req.params.class_id,
        section_id:req.params.section_id
      },
      include:[{
        model:Class,
        attributes:['class']
      },{
        model:Section,
        attributes:['section']
      }]
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

exports.collectStudentFee = async(req,res)=>{

  try {
    
    let student_id = req.params.student_id




  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}