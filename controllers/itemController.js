const Item = require('../models/Item')
const api = require('../utils/apiFactory')
const ItemCategory = require('../models/ItemCategory')

exports.getAllItems = async(req,res)=>{

  try {
    
    let data = await Item.findAll({
      include:{
        model:ItemCategory,
        attributes:['item_category']
      }
    })

    res.status(200).json({
      status:'success',
      data:data
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