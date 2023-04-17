const {sequelize,DataTypes} = require('../connection')
const GmeetLiveClass = require('./GMeetLiveClass')
const classSection = require('./ClassSections')

const GmeetLiveClassSection = sequelize.define('g_live_class_section',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  }

})

GmeetLiveClassSection.belongsTo(classSection,{foreignKey:'class_section_id',targetKey:'id',onDelete:'CASCADE'})
GmeetLiveClassSection.belongsTo(GmeetLiveClass,{foreignKey:'gmeet_live_id',targetKey:'id',onDelete:'CASCADE'})

module.exports = GmeetLiveClassSection