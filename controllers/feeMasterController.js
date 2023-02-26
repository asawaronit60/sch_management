const FeeMaster = require('../models/FeeMaster')
const api = require('../utils/apiFactory')
const sequelize = require('sequelize')
const FeeType = require('../models/FeeType')
const FeeGroup = require('../models/FeeGroup')
const Session = require('../models/Session')
// const feeGroupType = require('../models/FeeGroupCode')

exports.getAllFeeMaster = async(req,res,next)=>{

  try {
 
    let feeMasters = await FeeMaster.findAll({
      attributes:[
        [sequelize.fn('DISTINCT',sequelize.col('fee_group_id')),'fee_grp_id']
      ],
    })

    let results = []

    for(const id of feeMasters){

      let obj = {}
      let fee_codes = []

      let feeMaster = await FeeMaster.findAll({
        where:{
          fee_group_id:id.getDataValue('fee_grp_id')
        },
        include:[
          {
            model:FeeGroup,
            attributes:['name']
          },
          {
            model:FeeType,
            attributes:['id','type']
          },{
            model:Session,
            attributes:['session']
          }
        ]
      })

      obj.id = feeMaster[0].getDataValue('id')
      obj.fee_group = feeMaster[0].getDataValue('fee_group').name
      obj.session = feeMaster[0].getDataValue('session').session
      feeMaster.forEach(fee_master=>{
        fee_codes.push({
          id:fee_master.getDataValue('fee_type').id,
          code:fee_master.getDataValue('fee_type').type + ` $${fee_master.getDataValue('amount')}`
        })
      })

      
      obj.fee_code = fee_codes
      results.push(obj)
    
    }

    res.status(200).json({
      status:'success',
      data:results
    })

  } catch (err) {
  next(err)
  }

}

exports.createFeeMaster =async(req,res,next)=>{

  try {
    
    await FeeMaster.create(req.body)

    res.status(200).json({
          status:'success',
          message:'Added successfully!',
        
        })

  } catch (err) {
    next(err)
  }

}
exports.deleteFeeMasterType = async(req,res,next)=>{

  try {
    
    await FeeMaster.destroy({
      where:{
        id:req.params.fee_master_id,
        fee_type_id:req.params.fee_type_id
      }
    })

    res.status(200).json({
      status:'success',
      message:'Deleted successfully!'
    })

  } catch (err) {
    next(err)
  }


}


exports.deleteFeeMaster = async(req,res,next)=>{
  try {
    await FeeMaster.destroy({
      where:{
        id:req.params.id
      }
    })

    res.status(200).json({
      status:'success',
      message:'Deleted successfully!'
    })

  } catch (err) {
    next(err)
  }
}

exports.updateFeeMaster = api.update(FeeMaster)