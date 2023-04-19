const {sequelize,DataTypes} = require('../connection')
const classSection = require('./ClassSections')
const videoTutorial = require('./VideoTutorial')

const videoTutorialSection = sequelize.define('video_tutorial_sections',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  }


})

videoTutorialSection.belongsTo(classSection,{foreignKey:'class_section_id',targetKey:'id',onDelete:'CASCADE'})
videoTutorialSection.belongsTo(videoTutorial,{foreignKey:'video_tutorial_id',targetKey:'id',onDelete:'CASCADE'})

module.exports = videoTutorialSection