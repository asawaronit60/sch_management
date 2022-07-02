const Item = require('../models/Item')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')

exports.getAllItems = async(req,res)=>{

  try {
    
    let [results] = await sequelize.query(`
    select itm.*  , its.quantity from items as itm , stock_items as its where
    its.item_id = itm.id
    `)

    res.status(200).json({
      status:'success',
      data:results
    })

  } catch (err) {
      res.status(400).json({
        status:'fail',
        message:err.message
      })
  }


}


exports.createItem = api.create(Item)
exports.deleteItem = api.delete(Item)
exports.updateItem = api.update(Item)