const {sequelize, DataTypes} = require('../connection')
const Class = require('./Class')
const contentType = require('./ContentType')
const section = require('./Section')

const downloadCenter = sequelize.define('download_center',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  content_title:{
    type:DataTypes.STRING,
    allowNull:false
  },
 
  available_for:{
    type:DataTypes.STRING
  },
  upload_date:{
    type:DataTypes.DATEONLY,
    defaultValue:DataTypes.NOW
  },
  description:{
    type:DataTypes.STRING
  },
  content_file:{
    type:DataTypes.STRING
  }



})

downloadCenter.belongsTo(Class,{foreignKey:'class_id',targetKey:'id',onDelete:'CASCADE'})
downloadCenter.belongsTo(section,{foreignKey:'section_id',targetKey:'id',onDelete:'CASCADE'})
downloadCenter.belongsTo(contentType,{foreignKey:'content_type_id',targetKey:'id',onDelete:null})

downloadCenter.sync({alter:true})

module.exports = downloadCenter