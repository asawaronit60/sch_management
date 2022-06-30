const AlumniEvent = require('../models/AlumniEvent')
const Event = require('../models/Events')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')

exports.getAllAlumniEvent = async(req,res)=>{

  try {
    
let [results] = await sequelize.query(`

  select ev.title , s.session , pg.class , ev.from_date , ev.to_date from
  events as ev , sessions as s , classes as pg where
  ev.session_id = s.id and
  ev.program_id = pg.id

`)
res.status(400).json({
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

exports.createAlumniEvent = api.create(Event)
exports.deleteAlumniEvent = api.delete(Event)
exports.updateAlumniEvent = api.update(Event)