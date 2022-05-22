const Visitorbook  =require('../models/Visitorbook')

exports.getAllVisitorsBook = async(req,res)=>{

  try {
    let data =  Visitorbook.findAll()
  
    if(req.query.fields){
      let a = [] 
      a.push(req.query.fields.split(','))
      data = Visitorbook.findAll({attributes:a})
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

exports.createVisitorBook = async(req,res)=>{

  try {
    await Visitorbook.create(req.body)

    res.status(200).json({
      status:'success',
      message:'visitor added successfully'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.updateVisitorBook = async(req,res)=>{
  try {
    
   await Visitorbook.update(req.body , {where:{id:req.params.id}})
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

exports.deleteVisitorBook = async(req,res)=>{
  try {

      await Visitorbook.destroy({where:{id:req.params.id}})
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