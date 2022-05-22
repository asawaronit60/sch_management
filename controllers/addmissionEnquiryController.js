const AdmissionEnquiry = require('../models/AdmissionEnquiry')

exports.getAllAdmissionEnquiry = async(req,res)=>{

  try {
    let data =  AdmissionEnquiry.findAll()

    if(req.query.fields){
      let a = [] 
      a.push(req.query.fields.split(','))
      data = AdmissionEnquiry.findAll({attributes:a})
    }

   let enqueries = await data
   res.status(200).json({
     status:'success',
     data:enqueries
   })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.createEnquiry = async(req,res)=>{

  try {
    await AdmissionEnquiry.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Enquiry added successfully'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.updateEnquiry = async(req,res)=>{
  try {
    
   await AdmissionEnquiry.update(req.body , {where:{id:req.params.id}})
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

exports.deleteEnquiry = async(req,res)=>{
  try {

      await AdmissionEnquiry.destroy({where:{id:req.params.id}})
      res.status(200).json({
        status:'success',
        message:'Enquiry deleted successfully!'
      })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}