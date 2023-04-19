const {sequelize,DataTypes} = require('../connection')

const videoTutorial = sequelize.define('video_tutorial',{

    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
    title:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    video_link:{
      type:DataTypes.STRING,
      allowNull:false,
    },
     description:{
      type:DataTypes.STRING
    }


})

// videoTutorial.belongsTo(classSection,{foreignKey:'class_section_id',targetKey:'id',onDelete:'CASCADE'})

module.exports = videoTutorial