const frontcmsMenu = require('../models/FrontcmsMenu')

exports.getAllMenu = async(req,res)=>{
  try {

    let data = await frontcmsMenu.findAll()

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

exports.createMenu = async(req,res)=>{
  try {

    let data = await frontcmsMenu.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Menu created Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.createMenu = async(req,res)=>{
  try {

   await frontcmsMenu.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Menu created Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}


exports.deleteMenu = async(req,res)=>{
  try {

   await frontcmsMenu.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Menu deleted Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}