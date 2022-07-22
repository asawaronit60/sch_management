const downloadCenter = require('../models/DownloadContent')
const api = require('../utils/apiFactory')
const multer = require('multer')
const fs = require('fs')
const {sequelize} = require('../connection')

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./public/materials`);
  },
  filename: (req, file, cb) => {
    // const ext = file.mimetype.split("/")[1];
    cb(null, `${file.originalname}`);
    // cb(null, `${file.originalname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
}).single('content_file')


exports.createDownloadContent = async(req,res)=>{

  try {

    upload(req,res,async(err)=>{
      
      req.body.content_file = req.file.filename

      await downloadCenter.create(req.body).then(resp=>{}).catch(err =>{
        ///ds
    
        // res.status(400).json({
        //   status:'fail',
        //   message:err.message
        // })
      })

      res.status(200).json({
        status:'success',
        message:'File uploaded Successfully!'
      })

    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.getDownloadContent = async(req,res)=>{

  try {
  
    let [data] = await sequelize.query(`
    
    select dc.id,dc.content_title, ct.type,dc.available_for ,dc.upload_date, md.name as module, 
    case 
    when dc.available_for_all_courses = 'All Courses' then 'All Courses'
    else (select program_group_name from program_groups where id = dc.program_id)
    end as program
    from 
    download_centers as dc , content_types as ct , modules as md
    where
    dc.content_type = ct.id and
    dc.module_id = md.id

    ;`)


    res.status(200).json({
      status:'success',
      data
    })


  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}


exports.getContent = async(req,res)=>{

  try {

    let filename = await downloadCenter.findOne({attributes:['content_file'],where:{id:req.params.id}})

    let file = fs.readFileSync(`${__dirname}/../public/materials/${filename.content_file}`)

    res.send(file)

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }


}


exports.deleteContent = api.delete(downloadCenter)

exports.getAssignment = async(req,res)=>{

  try {
    
    let [data] = await sequelize.query(`
    
    select dc.id,dc.content_title, ct.type,dc.available_for ,dc.upload_date,
    case 
    when dc.available_for_all_courses = 'All Courses' then 'All Courses'
    else (select program_group_name from program_groups where id = dc.program_id)
    end as program
    from 
    download_centers as dc , content_types as ct 
    where
    dc.content_type = ct.id and
    ct.type = 'assignments'

    ;`)


    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}



exports.getOtherDownloads = async(req,res)=>{

  try {
    
    let [data] = await sequelize.query(`
    
    select dc.id,dc.content_title, ct.type,dc.available_for ,dc.upload_date,
    case 
    when dc.available_for_all_courses = 'All Courses' then 'All Courses'
    else (select program_group_name from program_groups where id = dc.program_id)
    end as program
    from 
    download_centers as dc , content_types as ct 
    where
    dc.content_type = ct.id and
    ct.type = 'Other Downloads'

    ;`)


    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}


exports.getStudyMaterial = async(req,res)=>{

  try {
    
    let [data] = await sequelize.query(`
    
    select dc.id,dc.content_title, ct.type,dc.available_for ,dc.upload_date,
    case 
    when dc.available_for_all_courses = 'All Courses' then 'All Courses'
    else (select program_group_name from program_groups where id = dc.program_id)
    end as program
    from 
    download_centers as dc , content_types as ct 
    where
    dc.content_type = ct.id and
    ct.type = 'study Material'

    ;`)


    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.getSyllabus = async(req,res)=>{

  try {
    
    let [data] = await sequelize.query(`
    
    select dc.id,dc.content_title, ct.type,dc.available_for ,dc.upload_date,
    case 
    when dc.available_for_all_courses = 'All Courses' then 'All Courses'
    else (select program_group_name from program_groups where id = dc.program_id)
    end as program
    from 
    download_centers as dc , content_types as ct 
    where
    dc.content_type = ct.id and
    ct.type = 'syllabus'

    ;`)


    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }




}