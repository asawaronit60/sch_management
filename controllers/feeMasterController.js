const FeeMaster = require('../models/FeeMaster')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')
// const feeGroupType = require('../models/FeeGroupCode')

exports.getAllFeeMaster = async(req,res)=>{

  try {
    
    let [results] = await sequelize.query(`

    select fg.name, ft.code  from fee_groups as fg , fee_types as ft , fee_masters as fm where
    fm.fee_type_id = ft.id
    group by fm.fee_group_id
    
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

exports.createFeeMaster =async(req,res)=>{

  try {
    
      // let data = await FeeMaster.create(req.body)

     let feeCode = await sequelize.query(`select code from fee_types where id = ? `,
      {
        replacements:[req.body.fee_type_id]
      }
      )
    
      let fee_code = feeCode[0][0].code+` P${req.body.amount}`

      res.send(fee_code)

//  res.status(200).json({
//       status:'success',
//       data,
//       message:'Added successfully!'
//     })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}
exports.deleteFeeMaster = api.delete(FeeMaster)
exports.updateFeeMaster = api.update(FeeMaster)