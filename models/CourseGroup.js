const {sequelize,DataTypes} =  require('../connection')

const CourseGroup = sequelize.define('course_group',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  program_name_id:{
    type:DataTypes.INTEGER,
    allowNull:true,
    defaultValue:null
  },
  class_id:{
    type:DataTypes.INTEGER,
    defaultValue:null,
    references:{
      model:'classes',
      key:'id'
    }
  },
  subjects:{
    type:DataTypes.JSON,
    defaultValue:null
  },
  semester:{
    type:DataTypes.STRING,
    defaultValue:null,
    references:{
      model:'semesters',
      key:'id'
    }
  },
  level:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  description:{
    type:DataTypes.STRING,
  }

})

module.exports = CourseGroup