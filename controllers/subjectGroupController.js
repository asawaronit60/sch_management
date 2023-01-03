const Class = require('../models/Class')
const Section = require('../models/Section')
const Subject = require('../models/Subject')
const subjectGroup = require('../models/SubjectGroup')
const subjectGroupSection = require('../models/SubjectGroupSection')
const subjectGroupSubjects = require('../models/SubjectGroupSubjects')
const classSection = require('../models/ClassSections')

exports.getSubjectGroups = async(req,res)=>{

  try {
    
      let results = []

      let subjectGroups = await subjectGroup.findAll({
        attributes:['id','name'],
        include:{
          model:Class,
          attributes:['id','class']
        }
      })

      
      for (const grp of subjectGroups){

        let obj = {}

        let sections = []
        let subjects = []

        obj.id = grp.getDataValue('id')
        obj.name = grp.getDataValue('name')

        let sections_data = await subjectGroupSection.findAll({
          include:{
            model:Section,
            attributes:['id','section']
          },
          where:{
            subject_group_id:grp.getDataValue('id')
          }
        })

        sections_data.forEach(sec=>sections.push(
        {
          class_id:grp.getDataValue('class').id, 
          section_id:sec.section.id, 
          class:`${grp.getDataValue('class').class}-${sec.section.section}`
        })
        )

        let subjects_data = await subjectGroupSubjects.findAll({
          include:{
            model:Subject,
            attributes:['id','name']
          },
          where:{
            subject_group_id:grp.getDataValue('id')
          }
        })

        subjects_data.forEach(sub=>subjects.push({
          id:sub.subject.id,
          subject:sub.subject.name
        }))


        obj.class_Sections = sections
        obj.class_subject = subjects

        results.push(obj)

      }


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

exports.createSubjectGroup = async(req,res)=>{

  try {
    
    let {sections,subjects,...rem} = req.body 

    let newSubjectGroup = await subjectGroup.create(rem)

    for(const section of sections){

      let obj = {} 
      obj.subject_group_id = newSubjectGroup.getDataValue('id')
      obj.section_id = section
     
      await subjectGroupSection.create(obj)

    }

    for(const subject of subjects){

      let obj = {}
      obj.subject_group_id = newSubjectGroup.getDataValue('id')
      
      obj.subject_id = subject
    
      await subjectGroupSubjects.create(obj)

    }

    res.status(200).json({
      status:'success',
      message:'Subject group created Successfully!'
    })

  } catch (err) {
    console.log(err)
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }


}

exports.getSubjectGroup = async(req,res)=>{

  try {
    
    let class_id = req.params.class_id
    let section_id = req.params.section_id

    let sub_group_id = await subjectGroup.findOne({
      attributes:['id'],
      where:{
        class_id
      }
    })

    let final_sub_group_id = await subjectGroupSection.findAll({
      attributes:['subject_group_id'],
      where:{
        section_id,
        subject_group_id:sub_group_id.getDataValue('id')
      },
      include:{
        model:subjectGroup,
        attributes:['name']
      }
    })


    res.status(200).json({
      status:'success',
      data:final_sub_group_id
    })


  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}


exports.deleteSubjectGroup = async(req,res)=>{


  try {
    let subGrpId = req.params.id

    await subjectGroup.destroy({where:{id:subGrpId}})

    res.status(200).json({
      status:'success',
      message:'Subject group deleted successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

 




}

exports.getSubjectGroupSubjects = async(req,res)=>{

  try {
    
    let subjects = await subjectGroupSubjects.findAll({
      attributes:['id'],
      where:{
        subject_group_id:req.params.subject_group_id
      },
      include:{
        model:Subject,
        attributes:['name']
      }
    })

    res.status(200).json({
      stauts:'success',
      data:subjects
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}