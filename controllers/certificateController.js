const Certificate = require('../models/Certificates')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')
const multer = require('multer')

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./public/certificates/student_certificate`);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `certificate-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
}).single('background_image')

exports.getAllCertificates = api.getAll(Certificate)

exports.getCertificate = async(req,res,next)=>{
  try {
      let data = await Certificate.findByPk(req.params.id)

      res.status(200).json({
        status:'success',
        data
      })

  } catch (err) {
    next(err)
  }
}


exports.createCertificates = async(req,res)=>{

  try {

    upload(req,res,async(err)=>{

        if(err){
          return res.status(400).json({
            status:'fail',
            message:err.message
          })
        }

        req.body.background_image = `public/certificates/student_certificate/${req.file.filename}`
        await Certificate.create(req.body)


        res.status(200).json({
          status:'success',
          messaage:'Certificate created Sccessfully!'
        })

    })


  } catch (err) {
    res.status(400).json({
      status:'fail',
      messaage:err.message
    })
  }

}
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