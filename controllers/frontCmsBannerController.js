const frontCmsBanner = require('../models/FrontCmsBanner')

exports.getAllBanner = async(req,res)=>{

  try {

    let data =await frontCmsBanner.findAll()

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

exports.createBanner = async(req,res)=>{

  try {

   await frontCmsBanner.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Front Banner created Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.deleteBanner = async(req,res)=>{

  try {

    await frontCmsBanner.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Front Banner deleted Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}