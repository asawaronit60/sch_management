const frontCmsMenuItem = require('../models/frontCmsMenuItem')

exports.getAllItem = async(req,res)=>{

  try {
    
    let data = await frontCmsMenuItem.findAll({
      where:{
        menu_id:req.params.menu_id
      }
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

exports.createMenuItem = async(req,res)=>{

  try {
    
    req.body.menu_id = req.params.menu_id
    
    await frontCmsMenuItem.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Menu item added successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}


exports.deleteMenuItem = async(req,res)=>{

  try {
    
    await frontCmsMenuItem.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Menu item deleted successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.updateMenuItem = async(req,res)=>{

  try {
    
    await frontCmsMenuItem.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Menu item updated successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

