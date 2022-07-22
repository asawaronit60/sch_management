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
    defaultValue:null,
    references:{
      model:'program_groups',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  class_id:{
    type:DataTypes.INTEGER,
    defaultValue:null,
    references:{
      model:'classes',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  subjects:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  semester:{
    type:DataTypes.INTEGER,
    defaultValue:null,
    references:{
      model:'semesters',
      key:'id'
    },
    onDelete:'CASCADE'
  },
  level:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  description:{
    type:DataTypes.STRING,
  }

})

CourseGroup.beforeCreate((course,options)=>{

 let course_subjects = course.subjects.toString()

  course.subjects = course_subjects

})

module.exports = CourseGroup