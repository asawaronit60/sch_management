const {sequelize,DataTypes} = require('../connection')
const lessonName = sequelize.define('lesson_name',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  lesson:{
    type:DataTypes.STRING,
    allowNull:false
  },
  program_group_module_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'program_group_modules',
      key:'id'
    },
    onDelete:'CASCADE'
  },

})

module.exports = lessonName