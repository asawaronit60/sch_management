const {sequelize,DataTypes} = require('../connection')
const Lesson = require('../models/Lesson')

const lessonName = sequelize.define('lesson_name',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  lesson_name:{
    type:DataTypes.STRING,
    allowNull:false
  }

})

lessonName.belongsTo(Lesson,{foreignKey:'lesson_id',targetKey:'id',onDelete:'CASCADE'})

// lessonName.sync({alter:true})

module.exports = lessonName