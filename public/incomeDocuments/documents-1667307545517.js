const Complaint = require('../models/Complaint')

exports.getAllComplaint = async(req,res)=>{
 
  try {
    let data =  Complaint.findAll()

    if(req.query.fields){
      let a = [] 
      a.push(req.query.fields.split(','))
      data = Complaint.findAll({attributes:a})
    }

   let complaints = await data
   res.status(200).json({
     status:'success',
     data:complaints
   })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.createComplaint = async(req,res)=>{

  try {
    await Complaint.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Complaint added successfully'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.updateComplaint = async(req,res)=>{
  try {
    
   await Complaint.update(req.body , {where:{id:req.params.id}})
    res.status(200).json({
      status:'success',
      message:'updated successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.deleteComplaint = async(req,res)=>{
  try {

      await Complaint.destroy({where:{id:req.params.id}})
      res.status(200).json({
        status:'success',
        message:'complaint deleted successfully!'
      })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}