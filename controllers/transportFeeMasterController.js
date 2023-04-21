const TransportFeeMaster = require('../models/TransportFeeMaster')

let isAdded = false

async function addData(){

  let months = ["January","Febuary","March","Arpil","May","June","July","August","September","October","November","December"]

  for(const month of months){
  await  TransportFeeMaster.create({month})
  }
  isAdded = true
  console.log("Data added")
}

// if(isAdded===false)
// addData()

exports.getAllFeeMaster = async(req,res,next)=>{
  try {

    if(isAdded===false)
    addData()

    let data = await TransportFeeMaster.findAll();
    res.status(200).json({
      status:'succes',
      data
    })
  } catch (err) {
    next(err)
  }
}


exports.updateData = async(req,res,next)=>{
  try {
    
    await TransportFeeMaster.update(req.body,{where:{id:req.params.id}})

    res.status(200).json({
      status:'success',
      message:'Data added successfully!'
    })

  } catch (err) {
    next(err)
  }
}