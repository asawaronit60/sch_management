const ProgramGroup = require('../models/ProgramGroup')
const Classes = require('../models/Class')
const ApiFactory = require('../utils/apiFactory')
const {sequelize} = require('../connection')
const ProgramGroupProgram = require('../models/ProgramGroupPrograms')

exports.getAllProgramGroup = ApiFactory.getAll(ProgramGroup)

exports.getAllProgramGroupPrograms = ApiFactory.getAll(ProgramGroupProgram)

exports.getAllProgramGroups = async(req,res)=>{

  try {
    
    let [results] = await sequelize.query(`

    select distinct(pg.program_group_name) , cls.class from 
    programgroup_programs as pgg, program_groups as pg ,classes as cls where
    pgg.programGroupId = pg.id and 
    cls.id in (select programgroup_programs.classId from programgroup_programs)

    ;`)

    res.send(results)

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }
}


exports.createProgramGroup = async(req,res)=>{

  try {
   
    let data = await ProgramGroup.create({
      program_group_name:req.body.program_group_name
    })

      for(const programId of req.body.programs){
       await ProgramGroupProgram.create({
          programGroupId:data.id,
          classId:Number(programId)
        })
      }

    res.status(200).json({
      status:'success',
      data,
      message:'Program group created successfully!'
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err
    })
  }

}
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