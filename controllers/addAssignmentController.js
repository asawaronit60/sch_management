const AddAssignment = require('../models/AddAssignment')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')
const multer = require('multer')


const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./public/addAssignment`);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
}).single('document')


exports.getAllAssignment = async(req,res)=>{

  try {

  let [results] = await sequelize.query(`
    
  select pg.class , s.session ,  md.name , ad.assignment_date , ad.submission_date , ss.name from 
  classes as pg , sessions as s  , modules as md , add_assignments as ad , staffs as ss , course_groups as cg where
  
  ad.program_id = pg.id and 
  ad.staff_id = ss.id and 
  ad.module_id = pg.id and
  ad.intake_id = s.id and 
  ad.course_group_id = cg.id
  
  ;`)      

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

exports.createAssignment = async(req,res)=>{

  try {

    upload(req,res,async(err) =>{

        if(err){
          res.status(400).json({
            status:'fail',
            message:err.message
          })
        }
  
        if(req.file){
      req.body.document = req.file.filename
}

      await AddAssignment.create(req.body)

      res.status(200).json({
        status:'success',
        message:'Assignment uploaded successfully!'
      })

    })


  } catch (err) {
    res.status(400).json({
      status:'success',
      message:err.message
    })
  }



}
exports.deleteAssignment = api.delete(AddAssignment)
exports.updateAssignment = api.update(AddAssignment)