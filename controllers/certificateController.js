const Certificate = require('../models/Certificates')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')

exports.getAllCertificates = api.getAll(Certificate)
exports.createCertificates = api.create(Certificate)
exports.deleteCertificates = api.delete(Certificate)
exports.updateCertificates = api.update(Certificate)


exports.searchGenerateCertificate = async(req,res)=>{

  try {
    
    let [results] = await sequelize.query(`

    select st.id_no , st.fullname , pg.class , st.father_name,st.dob , st.gender,ct.category,st.mobileno from
    students as st  , classes as pg , categories as ct where
    st.program_id = ? and
    st.intake_id = ? and
    st.program_id = pg.id and 
    st.category_id = ct.id
  
   `,{
      replacements:[req.body.program_id , req.body.intake_id]
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