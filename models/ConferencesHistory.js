const {sequelize,DataTypes} = require('../connection')

const conferenceHistory = sequelize.define('conference_history',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  conference_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'conferences',
      key:'id'
    },
    defaultValue:null
  },
  staff_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'staffs',
      key:'id'
    },
    defaultValue:null
  },
  student_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'students',
      key:'id'
    },
    defaultValue:null
  },
  total_hit:{
    type:DataTypes.INTEGER,
    defaultValue:1,
    allowNull:false
  },
})

module.exports = conferenceHistory