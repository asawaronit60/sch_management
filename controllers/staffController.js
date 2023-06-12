const Staff = require('../models/Staff')
const staffLeaveDetails = require('../models/StaffLeaveDetails')
const api = require('../utils/apiFactory')
const Role = require('../models/UserRoles')
const multer = require('multer')
const user = require('../models/User')
const idGenerationSetting = require('../models/GeneralSetting').idGenerationSetting
const bcrypt = require('bcrypt')

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

function generateRandomNumberString(n, key) {
  var numberString = key.toString(); // Convert key to string
  
  for (var i = 0; i < n - key.toString().length; i++) {
    var randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    numberString += randomNumber.toString(); // Append the random number to the string
  }
  
  return numberString;
}


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

      let newPassword =   genPassword()

      req.body.password = newPassword

      let autoIdGeneration = await idGenerationSetting.findByPk(1)
      
      if(autoIdGeneration.getDataValue('auto_staff_id')==='enable'){

        let totalStaffs = await Staff.count();
        
        let staffPrefix = autoIdGeneration.getDataValue('staff_id_prefix')
        let staffDigits = autoIdGeneration.getDataValue('staff_no_digit')
        let staffStartFrom = autoIdGeneration.getDataValue('staff_id_start_from')

        let randomNum = generateRandomNumberString(staffDigits,parseInt(staffStartFrom)+totalStaffs+1)

        let staffNum = staffPrefix+randomNum;

        console.log(totalStaffs,staffPrefix,staffDigits,staffStartFrom,randomNum,staffNum)
        req.body.staff_id = staffNum
      }


      let newStaff = await Staff.create(req.body)

      let passwordHashed = await bcrypt.hash(newPassword, 10)

      let newUser = await user.create({
        name:`${req.body.name} ${req.body.surname}`,
        email:req.body.email,
        password:passwordHashed,
        original_password:newPassword,
        role:'staff',
        date_of_birth:req.body.dob,
        user_id:newStaff.getDataValue('id')
      })

      if(req.body.leaves)
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
exports.updateStaff = async(req,res,next)=>{
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

      // req.body.password = genPassword()

       await Staff.update(req.body,{where:{id:req.params.id}})

      // for(const leave of req.body.leaves){

      //   await staffLeaveDetails.create({
      //     staff_id:newStaff.getDataValue('id'),
      //     leave_type_id:leave.leave_type_id,
      //     alloted_leave:leave.alloted_leave
      //   })
        
      // }


      res.status(200).json({
        status:'success',
        message:'staff updated successfully!'
      })

    })


  } catch (err) {
    next(err)
  }
}


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
