const Class = require('../models/Class')
const classSection = require('../models/ClassSections')
const Section = require('../models/Section')

const ApiFactory = require('../utils/apiFactory')

exports.getAllClass = async (req, res, next) => {

  try {

    let results = []

    let classes = await Class.findAll({
      attributes: ['id', 'class']
    })

    for (const cl of classes) {

      let obj = {}

      let sections = []

      // let class_id = cl.getDataValue('id')

      let data = await classSection.findAll({
        where: { class_id: cl.getDataValue('id') },
        include: [
          {
            model: Class,
            attributes: ['id', 'class']
          },
          {
            model: Section,
            attributes: ['id', 'section']
          }
        ]
      })


      obj.class_id = cl.getDataValue('id')
      obj.class = cl.getDataValue('class')

      data.forEach(el => {
        if(el.section!=null)
        sections.push({ section_id:el.getDataValue('section').id, section: el.getDataValue('section').section })
      })

      obj.sections = sections

      results.push(obj)

    }//for 


    res.status(200).json({
      status: 'success',
      data: results
    })

  } catch (err) {
    // console.log(err)
    next(err)
  }

}



exports.createClass = async (req, res) => {

  try {

    let { section_id, ...remaining } = req.body

    let newClass = await Class.create(remaining)

    for (const id of section_id) {

      let obj = {}
      obj.class_id = newClass.getDataValue('id')
      obj.section_id = id

      await classSection.create(obj)

    }

    res.status(200).json({
      status: 'success',
      message: 'Class created succesfully!',

    })



  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }


}

exports.getClassSections = async (req, res) => {

  try {

    let sections = await classSection.findAll({
      attributes: ['id'],
      where: {
        class_id: req.params.class_id
      },
      include: {
        model: Section,
        attributes: ['id', 'section']
      }
    })



    if (sections.length === 0)
      return res.status(404).json({
        status: 'fail',
        message: 'no sections found!'
      })

    res.status(200).json({
      status: 'success',
      data: sections
    })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    })
  }


}






exports.deleteClass = ApiFactory.delete(Class)

exports.updateClass = async(req,res,next)=>{
  try { 

      let {section_id, ...rem} = req.body
   
    await Class.update(rem,{
      where:{
        id:req.params.id
      }
    })

    if(section_id){

        await classSection.destroy({
          where:{
            class_id:req.params.id
          }
        })
        
        for(const id of section_id){

            await classSection.create({
              class_id:req.params.id,
              section_id:id
            })

        }

    }

    res.status(200).json({
      status:'success',
      message:'class section update successfully!'
    })

  } catch (err) {
    next(err)
  }
}