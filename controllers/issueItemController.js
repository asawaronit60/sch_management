const IssueItem = require('../models/IssueItem')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')


exports.getAllIssueItems = async(req,res)=>{

  try {
    
    let [results] = await sequelize.query(`

    select item.name , itc.item_category , iss.issue_date, iss.return_date ,iss.issue_by , iss.quantity
    from items as item , item_categories as itc , issue_items as iss where 
    iss.item_id = item.id and
    iss.item_category_id = itc.id
    ;`)

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

exports.createIssueItem = api.create(IssueItem)
exports.deleteIssueItem = api.delete(IssueItem)
exports.updateIssueItem = api.update(IssueItem)