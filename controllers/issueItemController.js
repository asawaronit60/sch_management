const IssueItem = require('../models/IssueItem')
const api = require('../utils/apiFactory')
const Staff = require('../models/Staff')
const Item = require('../models/Item')
const ItemCategory = require('../models/ItemCategory')


exports.getAllIssueItems = async(req,res,next)=>{

  try {
    
    // let [results] = await sequelize.query(`

    // select item.id, item.name , itc.item_category , iss.issue_date, iss.return_date ,iss.issue_by , iss.quantity
    // from items as item , item_categories as itc , issue_items as iss where 
    // iss.item_id = item.id and
    // iss.item_category_id = itc.id
    // ;`)

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

exports.createIssueItem = api.create(IssueItem)
exports.deleteIssueItem = api.delete(IssueItem)
exports.updateIssueItem = api.update(IssueItem)