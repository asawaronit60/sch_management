const frontCmsGallery = require('../models/frontCmsGallery')

exports.getAllCmsGallery = async(req,res,next)=>{

  try {
    
    let data = await frontCmsGallery.findAll()

    res.status(200).json({
      status:'success',
      data
    })


  } catch (err) {
    next(err)
  }

}

exports.createCmsGallery = async(req,res,next)=>{

  try {

    if(req.body.gallery_images)
    req.body.gallery_images = JSON.stringify(req.body.gallery_images)

   await frontCmsGallery.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Gallery Created successfully!',
    })

  } catch (err) {
   next(err)
  }
  
}

exports.deleteCmsGallery = async(req,res,next)=>{

  try {
    
    await frontCmsGallery.destroy({where:{id:req.params.id}})

    

    res.status(200).json({
      status:'success',
      message:'Gallery deleted successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.updateCmsGallery = async(req,res,next)=>{
  try {
    

    if(req.body.gallery_images)
    req.body.gallery_images = JSON.stringify(req.body.gallery_images)

    await frontCmsGallery.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Gallery updated successfully!'
    })

  } catch (err) {
    next(err)
  }


}