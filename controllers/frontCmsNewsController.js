const frontCmsNews = require('../models/FrontCmsNews')

exports.getAllNews = async(req,res)=>{

  try {

    let data = await frontCmsNews.findAll()

    res.status(200).json({
      stautus:'success',
      data
    })


  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.createCmsNews = async(req,res)=>{

  try {
    
    await frontCmsNews.create(req.body)

    res.status(200).json({
      stautus:'success',
      message:'Front News Created Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.deleteCmsNews = async(req,res)=>{

  try {
    
    await frontCmsNews.destroy({where:{id:req.params.id}})
    
    res.status(200).json({
      stautus:'success',
      message:'Front News deleted Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}


exports.updateCmsNews = async(req,res)=>{

  try {
    
    await frontCmsNews.update(req.body,{where:{id:req.params.id}})
    
    res.status(200).json({
      stautus:'success',
      message:'Front News updated Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}