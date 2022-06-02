const IncomeHead = require('../models/IncomeHead')

exports.getAllIncomeHead  = async(req,res)=>{
  try {
  
   let fields , sort=null
 
    if(req.query.fields)
      fields = req.query.fields.split(',')

    if(req.query.sort)
      sort.push(req.query.sort)

      let data = await IncomeHead.findAll({order:sort,attributes:fields})

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

exports.createIncomeHead = async(req,res)=>{
  try {
    let data = await IncomeHead.create(req.body)
    res.status(200).json({
      status:'success',
      message:'Income head created successfully!',
      data
    })
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.deleteIncomeHead = async(req,res)=>{
  try {
      await IncomeHead.destroy({where:{id:req.params.id}})
      res.status(200).json({
        status:'success',
        message:'Income head deleted successfully'
      })
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.updateIncomeHead = async(req,res)=>{
  try {
      await IncomeHead.update(req.body,{where:{id:req.params.id}})
      res.status(200).json({
        status:'success',
        message:'IncomeHead updated successfully'
      })
  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}