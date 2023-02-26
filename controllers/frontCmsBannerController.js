const frontCmsBanner = require('../models/FrontCmsBanner')

exports.getAllBanner = async(req,res,next)=>{

  try {

    let data =await frontCmsBanner.findAll()

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
   next(err)
  }

}

exports.createBanner = async(req,res,next)=>{

  try {


  //  req.body.image = `public/mediaManager/${req.body.image}`

   await frontCmsBanner.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Front Banner created Successfully!'
    })

  } catch (err) {
   next(err)
  }

}

exports.deleteBanner = async(req,res,next)=>{

  try {

    await frontCmsBanner.destroy({where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Front Banner deleted Successfully!'
    })

  } catch (err) {
   next(err)
  }

}