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
    type:DataTypes.DATE,
    allowNull:false
  },
  exam_to:{
    type:DataTypes.DATE,
    allowNull:false
  },
  time_duration:{
    type:DataTypes.TIME,
    allowNull:false
  },
  auto_result_publish_date:{
    type:DataTypes.DATE
  },
  attempt:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  pass_percent:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  answer_word_limit:{
    type:DataTypes.INTEGER,
    // allowNull:false,
    defaultValue:-1
  },
  desciption:{
    type:DataTypes.TEXT
  },
  publish_exam:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  },
  publish_result:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  },
  negative_marking:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  },
  display_marks_in_exam:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  },
  random_question_order:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  },
  quiz:{
    type:DataTypes.ENUM('yes','no'),
    defaultValue:'no'
  }

})

// onlineExam.sync({alter:true})
module.exports = onlineExam