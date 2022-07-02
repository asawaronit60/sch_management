const {sequelize,DataTypes} = require('../connection')
const ProgramGroup = require('../models/ProgramGroup')
const Programs = require('../models/Class')
const programGroupPrograms = sequelize.define('programgroup_programs',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  // program_group_id:{
  //   type:DataTypes.INTEGER,
  //   allowNull:false,
  //   references:{
  //     model:'program_groups',
  //     key:'id'
  //   }
  // },
  // program_id:{
  //   type:DataTypes.INTEGER,
  //   allowNull:false,
  //   references:{
  //     model:'classes',
  //     key:'id'
  //   }
  // }

},{
  underscored:false
})

 Programs.hasMany(programGroupPrograms,{as:'program_id',foreignKey:'id'})
 programGroupPrograms.belongsTo(Programs)


 ProgramGroup.hasMany(programGroupPrograms,{as:'program_group_id',foreignKey:'id'})
 programGroupPrograms.belongsTo(ProgramGroup)

// programGroupPrograms.sync({alter:true})

module.exports = programGroupPrograms