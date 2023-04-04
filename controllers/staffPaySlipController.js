const {sequelize} = require('../connection')
const StaffPaySlip = require('../models/StaffPaySlip')

const api = require('../utils/apiFactory')

exports.getAllStaffPaySlip = async(req,res)=>{

  try {
    
    let [results] = await sequelize.query(`
  
    select st.name,st.contact_no,st.employee_id,st.role, d.department_name from
    staffs st, departmetns 
    where st.department_id = d.id and 
    st.role = ?
    st.role = staff_roles.id
    `,
    {
      replacements: [req.body.role]
    }
    )

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


exports.createStaffPaySlip = api.create(StaffPaySlip)
exports.deleteStaffPaySlip = api.delete(StaffPaySlip)
exports.updateStaffPaySlip = api.update(StaffPaySlip)