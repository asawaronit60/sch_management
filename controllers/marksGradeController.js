const marksGrade = require('../models/MarksGrade')
const examType = require('../models/ExamType')

exports.getAllMarksGrade = async(req,res,next)=>{

  try {

    let examTypes = await examType.findAll({
      attributes:['id','exam_type']
    })

    let results = []

    for(const examtype of examTypes){
      
      let obj = {}
      obj.id = examtype.getDataValue('id')
      obj.exam_type = examtype.getDataValue('exam_type')

      let grade_name = [] 
      let percent_upto = [] 
      let percent_from = [] 
      let grade_point = []

      let marks_grades = await marksGrade.findAll({
        where:{
          exam_type_id:examtype.getDataValue('id') 
        }
      })

      
      obj.grade = marks_grades

      // grade_name = marks_grades.getDataValue('grade_name').map(gn=>gn)
      // percent_upto = marks_grades.getDataValue('percent_upto').map(pu=>pu)
      // percent_from = marks_grades.getDataValue('percent_from').map(pf=>pf)
      // grade_point = marks_grades.getDataValue('grade_point').map(gp=>gp)

      // obj.grade_name = grade_name
      // obj.percent_upto = percent_upto
      // obj.percent_from = percent_from
      // obj.grade_point = grade_point

      results.push(obj)

    }


    // let data =await marksGrade.findAll({
    //   include:{
    //     model:examType
    //   }
    // })

    res.status(200).json({
      status:'success',
      data:results
    })


  } catch (err) {
    next(err)
  }

}

exports.createMarksGrade = async(req,res,next)=>{

  try {
    
    let data = await marksGrade.create(req.body)

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }

}


exports.deleteMarksGrade = async(req,res,next)=>{

  try {
    
     await marksGrade.destroy({
      where:{
        id:Number(req.params.id)
      }
    })

    res.status(200).json({
      status:'success',
      message:'Data deleted successfully!'
    })

  } catch (err) {
    next(err)
  }

}

exports.updateMarksGrade = async(req,res,next)=>{

  try {
    
     await marksGrade.update(req.body,{
      where:{
        id:Number(req.params.id)
      }
    })

    res.status(200).json({
      status:'success',
      message:'Data updated successfully!'
    })

  } catch (err) {
    next(err)
  }

}