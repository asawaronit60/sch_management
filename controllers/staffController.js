const Staff = require('../models/Staff')
const staffLeaveDetails = require('../models/StaffLeaveDetails')
const api = require('../utils/apiFactory')
const Role = require('../models/UserRoles')
const multer = require('multer')

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./public/staffDetails`);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `staff-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
}).fields([
  {name:'image',maxCount:1},
  {name:'resume',maxCount:1},
  {name:'joining_letter',maxCount:1},
  {name:'resignation_letter',maxCount:1},
  {name:'other_document_file',maxCount:1}
])

function genPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password
}


exports.getAllStaff = api.getAll(Staff)




exports.createStaff = async(req,res,next)=>{
  try {
    
    upload(req,res,async(err)=>{

      if (req.files.image) {
        req.body.image = `public/staffDetails/${req.files.image[0].originalname}` 
      }

      if (req.files.resume) {
        req.body.resume = `public/staffDetails/${req.files.resume[0].originalname}` 
      }

      if (req.files.joining_letter) {
        req.body.joining_letter = `public/staffDetails/${req.files.joining_letter[0].originalname}` 
      }


      if (req.files.other_document_file) {
        req.body.other_document_file = `public/staffDetails/${req.files.other_document_file[0].originalname}` 
      }

      req.body.password = genPassword()

      let newStaff = await Staff.create(req.body)

      for(const leave of req.body.leaves){

        await staffLeaveDetails.create({
          staff_id:newStaff.getDataValue('id'),
          leave_type_id:leave.leave_type_id,
          alloted_leave:leave.alloted_leave
        })
        
      }


      res.status(200).json({
        status:'success',
        message:'staff added successfully!'
      })

    })


  } catch (err) {
    next(err)
  }
}



exports.deleteStaff = api.delete(Staff)
exports.updateStaff = api.update(Staff)

exports.getAllTeachers = async (req, res) => {

  try {

    let role_id = await Role.findOne({
      where: {
        name: 'Teacher' || 'teacher'
      }
    })

    let data = await Staff.findAll({
      attributes: ['id', 'name'],
      where: {
        role_id: role_id.getDataValue('id')
      }
    })

    res.status(200).json({
      status: 'success',
      data
    })


  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }


}

exports.getRoleStaff = async(req,res,next)=>{
  try {

    let data = await Staff.findAll({
      where:{
        role_id:req.params.role_id
      }
    })

    res.status(200).json({
      status: 'success',
      data
    })

  } catch (err) {
    next(err)
  }
}