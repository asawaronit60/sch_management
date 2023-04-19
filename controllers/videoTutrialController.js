const videoTutorial = require('../models/VideoTutorial')
const ClassSection = require('../models/ClassSections')
const videoTutorialSection = require('../models/videoTutorialSections')

exports.getAllContent = async (req, res, next) => {
  try {

    let whereObj = {}
    let classSection

    if(!req.body.class_id && !req.body.title){
      let data =await videoTutorial.findAll()
    return  res.status(200).json({
        status:'success',
        data
      })
    }

    if(req.body.class_id)
     classSection = await ClassSection.findOne({
      attributes: ['id'],
      where: {
        class_id: req.body.class_id,
        section_id: req.body.section_id
      }
    })

    let videoTSection
    if (classSection){
     videoTSection  = await videoTutorialSection.findOne({class_section_id:classSection.getDataValue('id')})
     whereObj['id'] = videoTSection.getDataValue('video_tutorial_id')
}
    if (req.body.title)
      whereObj['title'] = req.body.title

    let data = await videoTutorial.findAll({
      where: whereObj
    })

    res.status(200).json({
      status: 'success',
      data
    })


  } catch (err) {
    next(err)
  }
}

exports.createTutorial = async (req, res, next) => {

  try {

    let { class_id, section_id, ...rem } = req.body


    if (!class_id)
      return next(new AppError('class is required!', 404))

    if (section_id.length === 0)
      return next(new AppError('section is required!', 404))

    let newTutorial = await videoTutorial.create(rem)

    for (const id of section_id) {
      let classSection = await ClassSection.findOne({
        where: {
          class_id,
          section_id: id
        }
      })

      if (classSection) {
        videoTutorialSection.create({
          class_section_id: classSection.getDataValue('id'),
          video_tutorial_id: newTutorial.getDataValue('id')
        })
      }

    }//for



    res.status(200).json({
      status: 'success',
      message: 'Tutorial added successfully!'
    })

  } catch (err) {
    next(err)
  }

}


exports.deleteTutorial = async (req, res, next) => {

  try {

    await videoTutorial.destroy({ where: { id: req.params.id } })
    await videoTutorialSection.destroy({where:{video_tutorial_id: req.params.id}})

    res.status(200).json({
      status: 'success',
      message: 'Content deleted!'
    })

  } catch (err) {
    next(err)
  }

}

exports.updateContent = async (req, res, next) => {

  try {

    let {class_id,section_id,...rem} = req.body

    if(rem)
    await videoTutorial.update(rem,{where:{id:req.params.id}})


    await videoTutorialSection.destroy({where:{video_tutorial_id: req.params.id}})

      
    for (const id of section_id) {
      let classSection = await ClassSection.findOne({
        where: {
          class_id,
          section_id: id
        }
      })

      if (classSection) {
        videoTutorialSection.create({
          class_section_id: classSection.getDataValue('id'),
          video_tutorial_id: req.params.id
        })
      }

    }




    res.status(200).json({
      status: 'success',
      message: 'Content deleted!'
    })

  } catch (err) {
    next(err)
  }

}