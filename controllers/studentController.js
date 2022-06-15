const Student = require('../models/student')

exports.getAllStudent = async(req,res)=>{
  try {

    let data =  Student.findAll()

    if(req.query.fields){
      data = Student.findAll({attributes:req.query.fields.split(',')})
    }

    let students = await data

    res.status(200).json({
      status:'success',
      data:students
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
      program:req.body.program,
       name: {
        [Op.like]: req.body.search,
      },
      roll_no:req.body.search,
      admission_no:req.body.search  
    }//where
  
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
    await Student.create(req.body)
    res.status(200).json({
      status:'success',
      message:'student added successfully!'
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
      program:req.body.program,
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
      program:req.body.program,
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