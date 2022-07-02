const Event = require('../models/Events')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')

exports.getAllAlumniEvent = async(req,res)=>{

  try {
    
let [results] = await sequelize.query(`

  select ev.id, ev.title , s.section , sess.session as pass_out_section  , pg.class as program , ev.from_date , ev.to_date from
  events as ev , sections as s , classes as pg , sessions as sess where
  ev.section_id = s.id and
  ev.program_id = pg.id and  
  ev.intake_id = sess.id  
 

`)

let data = await sequelize.query(`

select ev.id, IFNULL(program_id,'All') as program , ev.title , ev.from_date , ev.to_date from events as ev
where 
ev.program_id is null and ev.section_id is null and ev.intake_id is null

`)

data[0].forEach(obj =>{
  results.push(obj)
})

results.sort((a,b) =>{
  return a.id - b.id
})

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

exports.createAlumniEvent = async(req,res)=>{

    try {

      await Event.create(req.body)
      res.status(200).json({
        status:'success',
        message:'Event created successfully'
      })
 

    } catch (err) {
      res.status(400).json({
        status:'fail',
        message:err.message
      })
    }


}
exports.deleteAlumniEvent = api.delete(Event)
exports.updateAlumniEvent = api.update(Event)

exports.getAllAlumni = async(req,res)=>{

  try {

    let [results] = await sequelize.query(`
    
    select st.id ,st.student_no , st.firstname , pg.class , st.gender , st.email,st.mobileno from 
    students as st , classes as pg where 
    st.intake_id = ? and 
    st.section_id = ? and 
    st.program_id = ? and 
    st.program_id = pg.id

    ;`,{
      replacements:[req.body.session_id , req.body.section_id , req.body.program_id]
    })



    res.status(200).json({
      stauts:'success',
      data:results
    })


  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}