const userLog = require('../models/UserLogs')
const Class = require('../models/Class')
const section = require('../models/Section')



exports.getAllLogs = async(req,res,next)=>{
  try {

    let whereObj = {}

    if(req.query.role){
      whereObj.role = role
    }

    let data = await userLog.findAll({
      where:whereObj,
      include:[
        { model:Class ,attributes:['id','class']   },
        { model:section ,attributes:['id','section']   }
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