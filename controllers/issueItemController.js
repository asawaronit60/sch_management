const IssueItem = require('../models/IssueItem')
const api = require('../utils/apiFactory')
const Staff = require('../models/Staff')
const Item = require('../models/Item')
const ItemCategory = require('../models/ItemCategory')
const AppError = require('../utils/AppError')


exports.getAllIssueItems = async(req,res,next)=>{

  try {
    

    let data = await IssueItem.findAll({
      include:[
        {
          model:Staff,
          attributes:['id','name'],
          as:'issueTo'
        },
        {
          model:Staff,
          attributes:['id','name'],
          as:'issueBy'
        },
        {
          model:Item,
          attributes:['id','name']
        },
        {
          model:ItemCategory,
          attributes:['id','item_category']
        }
      ]
    })

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
    }

}

exports.createIssueItem = async(req,res,next)=>{

  try {
    
    let item = await Item.findByPk(req.body.item_id)

    if(item.getDataValue('unit') <=0 )
    return next(new AppError('No items left in stock',404))

    if(!req.body.item_id)
    return next(new AppError('Item is required!',400))

    if(!req.body.item_category_id)
    return next(new AppError('Item category required!',400))

    if(!req.body.issue_to)
    return next(new AppError('Issue to required!',400))

    if(!req.body.issue_by)
    return next(new AppError('Issue by required!',400))
    
    if(!req.body.user_id)
    return next(new AppError('user type required!',400))

    await IssueItem.create(req.body)

    res.status(200).json({
      status:'success',
      message:'Item issued!'
    })

    await Item.update({unit:item.getDataValue('unit')-1},{where:{id:req.body.item_id}})

  } catch (err) {
    next(err)
  }

}
exports.deleteIssueItem = api.delete(IssueItem)
exports.updateIssueItem = api.update(IssueItem)