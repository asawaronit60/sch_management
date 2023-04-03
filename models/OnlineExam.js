const {sequelize,DataTypes} = require('../connection')


const onlineExam = sequelize.define('online_exam',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  exam_title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  exam_from:{
    type:DataTypes.DATE
  },
  exam_to:{
    type:DataTypes.DATE
  },
  time_duration:{
    type:DataTypes.TIME
  },
  auto_result_publish_date:{
    type:DataTypes.DATE
  },
  attempt:{
    type:DataTypes.INTEGER
  },
  pass_percent:{
    type:DataTypes.DECIMAL
  },
  asnwer_word_limit:{
    type:DataTypes.INTEGER
  },
  desciption:{
    type:DataTypes.TEXT
  },
  publish_exam:{
    type:DataTypes.ENUM('yes','no')
  },
  publish_result:{
    type:DataTypes.ENUM('yes','no')
  },
  publish_negative_marking:{
    type:DataTypes.ENUM('yes','no')
  },
  display_marks_in_exam:{
    type:DataTypes.ENUM('yes','no')
  },
  random_question_order:{
    type:DataTypes.ENUM('yes','no')
  },
  quiz:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  }

})

module.exports = onlineExam