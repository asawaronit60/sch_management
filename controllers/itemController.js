const Item = require('../models/Item')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')

exports.getAllItems = async(req,res)=>{

  try {
    
    let [results] = await sequelize.query(`
    select itm.id, itm.name , itmc.item_category ,itm.unit from
    items as itm  , item_categories as itmc where
    itm.item_category_id = itmc.id
    
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

exports.getItemName = async(req,res)=>{
  try {
    let data = await Item.findAll()

      res.status(200).json({
        stautus:'success',
        data
      })
  } catch (err) {
    res.status(400).json({
      stautus:'fail',
      message:err.message
    })
  }

}

exports.createItem = api.create(Item)
exports.deleteItem = api.delete(Item)
exports.updateItem = api.update(Item)