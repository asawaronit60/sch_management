const conferences = require('../models/Conferences')
const {sequelize} = require('../connection')
const api = require('../utils/apiFactory')

exports.getAllConference = async(req,res)=>{

  try {
    
    let [results] = await sequelize.query(`

    select con.title, con.date , zs.zoom_api_key , role.name , st.name , pg.class , con.status from
    conferences as con  , zoom_settings as zs , user_roles as role , staffs as st , classes as pg where

    con.role_id = role.id and 
    con.staff_id = st.id and
    con.program_id = pg.id 
    
    ;`)



    res.status(200).json({
      status:'success',
      data:results
    })

  } catch (err) {
    console.log(err)
    res.status(400).json({
      status:'fail',
      message:err.meessage
    })
  }

}


exports.createConference = api.create(conferences)
exports.deleteConference = api.delete(conferences)
exports.updateConference = api.update(conferences)