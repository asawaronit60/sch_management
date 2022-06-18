const {sequelize,DataTypes} = require('../connection')

const LibraryMembers = sequelize.define('library_members',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  library_card_no:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  member_type:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  member_id:{
    type:DataTypes.INTEGER,
    defaultValue:null
  },
  is_active:{
    type:DataTypes.ENUM('yes','no'),
    allowNull:false,
    defaultValue:'no'
  }

})

module.exports = LibraryMembers