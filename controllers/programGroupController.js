const ProgramGroup = require('../models/ProgramGroup')
const Classes = require('../models/Class')
const ApiFactory = require('../utils/apiFactory')

exports.getAllProgramGroup = ApiFactory.getAll(ProgramGroup)
exports.createProgramGroup = ApiFactory.create(ProgramGroup)
exports.deleteProgramGroup = ApiFactory.delete(ProgramGroup)
exports.updateProgramGroup = ApiFactory.update(ProgramGroup)

exports.getAllPrograms = async(req,res)=>{

  try {
    
    let data = await ProgramGroup.findOne({attributes:['programs'],  where:{id:req.params.id}})
    
    let prog = await Classes.findAll({where:{id:data.programs}})
    
    res.status(200).json({
      status:'success',
      data:prog
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}