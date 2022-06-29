const IdCard = require('../models/IdCard')
const multer = require('multer')
const api =  require('../utils/apiFactory');
const {sequelize} = require('../connection')

const multerStorage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null, `./public/idCard`);
  },
  filename:(req,file,cb)=>{
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  }
})

const upload = multer({
  storage:multerStorage,
  fileFilter: (req,file,cb)=>{
    if(file.mimetype.startsWith('image')){
        cb(null,true)
    }
    else{
      return cb(null, false, new Error('Please Upload an image!'));
    }
}
})

exports.uploadIdCardImages = upload.fields([
  {name:'background',maxCount:1},
  {name:'logo',maxCount:1},
  {name:'sign_image',maxCount:1}
])


exports.getAllIdCards = api.getAll(IdCard)


exports.createIdCards = async(req,res)=>{
  try {

   req.body.background = req.files.background[0].filename
   req.body.logo = req.files.logo[0].filename
   req.body.sign_image = req.files.sign_image[0].filename

    await IdCard.create(req.body)

   res.status(200).json({
    status:'success',
    message:'Id card created successfully!'
   })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}


exports.deleteIdCards = api.delete(IdCard)
exports.updateIdCards = api.update(IdCard)


exports.searchGenerateIdCard = async(req,res)=>{

  try {
    
    let [results] = await sequelize.query(`

    select  st.fullname , pg.class , st.father_name,st.dob , st.gender from
    students as st  , classes as pg where
    st.program_id = ? and
    st.intake_id = ? and
    st.program_id = pg.id 
  
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