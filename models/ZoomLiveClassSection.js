const {sequelize,DataTypes} = require('../connection')
const zoomLiveClass = require('./ZoomLiveClass')
const classSection = require('./ClassSections')

const zoomLiveClassSection = sequelize.define('zoom_live_class_section',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  }

})

zoomLiveClassSection.belongsTo(classSection,{foreignKey:'class_section_id',targetKey:'id',onDelete:'CASCADE'})
zoomLiveClassSection.belongsTo(zoomLiveClass,{foreignKey:'zoom_live_id',targetKey:'id',onDelete:'CASCADE'})

// zoomLiveClassSection.sync({alter:true})

module.exports = zoomLiveClassSection