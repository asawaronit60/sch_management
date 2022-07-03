const {sequelize,DataTypes} = require('../connection')

const programGroupModule = sequelize.define('program_group_module',{

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
  created_by_id:{
    type:DataTypes.INTEGER,
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
  }

})

module.exports = programGroupModule