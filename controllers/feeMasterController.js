const FeeMaster = require('../models/FeeMaster')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')

exports.getAllFeeMaster = async(req,res)=>{

  try {
    
    let [results] = await sequelize.query(`

    select fg.name , ft.code  from fee_groups as fg , fee_types as ft , fee_masters as fm where
    fm.fee_group_id = fg.id and 
    fm.fee_type_id = ft.id

    `)

    res.status(200).json({
      status:'success',
      data:results
    })

  } catch (err) {
    res.status(400).json({
      stauts:'success',
      message:err.message
    })
  }

}

exports.createFeeMaster = api.create(FeeMaster)
exports.deleteFeeMaster = api.delete(FeeMaster)
exports.updateFeeMaster = api.update(FeeMaster)