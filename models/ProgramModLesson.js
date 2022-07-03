const {sequelize,DataTypes} = require('../connection')

const programModLesson = sequelize.define('program_mod_lesson',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  program_group_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'program_groups',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  program_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'classes',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  module_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'modules',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  level_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'levels',
      key:'id'
    },
    defaultValue:null
  },
  semester_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'semesters',
      key:'id'
    },
    onDelete:'CASCADE',
    defaultValue:null
  },
  lesson_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'lesson_names',
      key:'id'
    },
    onDelete:'CASCADE',
    defaultValue:null
  }

})

module.exports = programModLesson