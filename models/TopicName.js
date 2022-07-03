const { INTEGER } = require('sequelize')
const {sequelize,DataTypes} = require('../connection')

const TopicName = sequelize.define('topic',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  topics:{
    type:DataTypes.STRING,
    allowNull:false
  },
  program_mod_lesson_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'program_mod_lessons',
      key:'id'
    },
    onDelete:'CASCADE'
  }


})

module.exports = TopicName