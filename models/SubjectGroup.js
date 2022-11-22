const {sequelize,DataTypes} = require('../connection')
const Class = require('../models/Class')

const subjectGroups = sequelize.define('subject_group',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:{
    type:DataTypes.STRING
  },
  descripton:{
    type:DataTypes.STRING
  }

})

subjectGroups.belongsTo(Class,{foreignKey:'class_id',targetKey:'id',onDelete:'CASCADE'})

// subjectGroups.sync({alter:true})

module.exports = subjectGroups
