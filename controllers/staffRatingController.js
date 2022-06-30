const StaffRating =require('../models/StaffRating')
const Api = require('../utils/apiFactory')
const {sequelize} = require('../connection')

exports.getAllStaffRating = async(req,res)=>{

  try {
    

    let [results] = await sequelize.query(`

    select st.employee_id , st.name , str.rate , str.comment , str.status from 
    staffs as st , staff_ratings as str where
    str.staff_id = st.id
   ; `)

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

exports.createStaffRating = Api.create(StaffRating)
exports.deleteStaffRating = Api.delete(StaffRating)
exports.updateStaffRating = Api.update(StaffRating)
