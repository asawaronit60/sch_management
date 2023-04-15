const Item = require('../models/Item')
const api = require('../utils/apiFactory')
const ItemCategory = require('../models/ItemCategory')

exports.getAllItems = async(req,res,next)=>{

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
      next(err)
  }


}

exports.getItemName = async(req,res,next)=>{
  try {
    let data = await Item.findAll()

      res.status(200).json({
        stautus:'success',
        data
      })
  } catch (err) {
    next(err)
  }

}

exports.createItem = api.create(Item)
exports.deleteItem = api.delete(Item)
exports.updateItem = api.update(Item)