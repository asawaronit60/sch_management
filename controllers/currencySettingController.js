const currency = require('../models/CurrencySetting').currency

exports.getAllCurrency = async(req,res,next)=>{

  try {
    
    let data = await currency.findAll()

    res.status(200).json({
      status:'success',
      data
    })


  } catch (err) {
   next(err) 
  }

}

exports.updateCurrency = async(req,res,next)=>{

  try {
    
    if(req.body.active===true){
      await currency.update({active:false},{where:{active:true}})
    }

    await currency.update(req.body,{
      where:{
        id:req.params.id
      }
    })

    res.status(200).json({
      status:'success',
      message:'updated successfully!'
    })


  } catch (err) {
   next(err) 
  }

}