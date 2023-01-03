const {sequelize, DataTypes} = require('../connection')
const Class = require('./Class')
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
  content_type:{
    type:DataTypes.ENUM('assignments','syllabus','study_material','other_download')
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

// downloadCenter.sync({alter:true})

module.exports = downloadCenter