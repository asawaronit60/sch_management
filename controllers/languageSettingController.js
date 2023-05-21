const languageSetting = require('../models/LanguageSetting')

exports.getAllSettings = async(req,res,next)=>{
  try {
    
    let data = await languageSetting.findAll()

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.getActiveLanguge = async(req,res,next)=>{
  try {
    
    let data = await languageSetting.findOne({where:{active:true}})

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }
}

exports.createLanguage = async(req,res,next)=>{
  try {
    
     await languageSetting.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Language created!'
    })

  } catch (err) {
    next(err)
  }
}

exports.updateLanguage = async(req,res,next)=>{
  try {

    if(req.body.active===true){
      await languageSetting.update({active:false},{
        where:{active:true}
      })
    }


     await languageSetting.update(req.body,{
      where:{
        id:req.params.id
      }
     })

    res.status(200).json({
      status:'success',
      message:'Language updated!'
    })

  } catch (err) {
    next(err)
  }
}