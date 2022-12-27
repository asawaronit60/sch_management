const AddAssignment = require('../models/AddAssignment')
const api = require('../utils/apiFactory')
const multer = require('multer');
const Class = require('../models/Class');
const section = require('../models/Section');
const subjectGroups = require('../models/SubjectGroup');
const staff = require('../models/Staff')
const subject = require('../models/Subject')

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
    
    let data = await AddAssignment.findAll({
      include:[
        {
          model:Class,
          attributes:['class']
        },
        {
          model:section,
          attributes:['section']
        },
        {
          model:staff,
          attributes:['name']
        },
        {
          model:subjectGroups,
          attributes:['name']
        },
        {
          model:subject,
          attributes:['name']
        }
      ]
    })

    res.status(200).json({
      stauts:'success',
      data
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
            status:'Error uploading document!',
            message:err.message
          })
        }

        if(req.user)
        req.body.staff_id = req.user.id 
        else req.body.staff_id = 5


        if(req.file){
        
        console.log(req.file)
          
        let pathArr = req.file.path.split("\\")
           
        let path = pathArr.splice(pathArr.indexOf("public"),pathArr.length).join("/")

        req.body.document = path
  }

      await AddAssignment.create(req.body)

      res.status(200).json({
        status:'success',
        message:'Assignment uploaded successfully!',
        data:req.body
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