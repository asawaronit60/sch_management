const Class = require('../models/Class')
const classSection = require('../models/ClassSections')
const Section = require('../models/Section')

const ApiFactory = require('../utils/apiFactory')

exports.getAllClass = async(req,res)=>{

  try {

    let results = []

    let classes = await Class.findAll({
      attributes:['id']
    })

    for (const cl of classes){

      let obj = {}

      let sections = [] 

      let class_id = cl.getDataValue('id')

      let data = await classSection.findAll({where:{class_id},
          include:[{
            model:Class,
            attributes:['class']
          },{
            model:Section,
            attributes:['section']
          }]
        })

        if(data.length>0)
        obj.class = data[0].class.class
        obj.id = class_id
        data.forEach(el=>{
          sections.push(el.section.section)
        })

        obj.section = sections

        results.push(obj)

      }//for 


    res.status(200).json({
      status:'success',
      data:results
    })

  } catch (err) {
    console.log(err)
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}



exports.createClass = async(req,res)=>{

  try {
    
    let { section_id , ...remaining } = req.body

    let newClass = await Class.create(remaining)

   for(const id of section_id){

      let obj = {}
      obj.class_id = newClass.getDataValue('id')
      obj.section_id = id

      await classSection.create(obj)
      
    }

   res.status(200).json({
    status:'success',
    message:'Class created succesfully!',
 
   })



  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }


}

exports.getClassSections = async(req,res)=>{

  try {
    
    let sections = await classSection.findAll({
      attributes:['id'],
      where:{
        class_id:req.params.class_id
      },
      include:{
        model:Section,
        attributes:['section']
      }
    })

    res.status(200).json({
      status:'success',
      data:sections
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }


}


exports.deleteClass = ApiFactory.delete(Class)
exports.updateClass = ApiFactory.update(Class)