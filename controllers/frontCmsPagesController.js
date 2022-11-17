const frontCmsPage = require('../models/FrontCmsPages')

exports.getAllPages = async(req,res)=>{

  try {

    let data = await frontCmsPage.findAll()

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

exports.createPage = async(req,res)=>{

  try {

   await frontCmsPage.create(req.body)

    res.status(200).json({
      status:'success',
      message:'News created Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.deletePage = async(req,res)=>{

  try {

   await frontCmsPage.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'News deleted Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}

exports.updatePage = async(req,res)=>{

  try {

   await frontCmsPage.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'News updated Successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}