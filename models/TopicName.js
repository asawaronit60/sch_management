const {sequelize,DataTypes} = require('../connection')
const Topic = require('../models/Topic')

const topicName = sequelize.define('topic_name',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  topic_name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.ENUM('Incomplete','Complete'),
    defaultValue:'Incomplete'
  },
  topic_completion_date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  }

})

topicName.belongsTo(Topic,{foreignKey:'topic_id',targetKey:'id',onDelete:'CASCADE'})

// topicName.sync({alter:true})

module.exports = topicName