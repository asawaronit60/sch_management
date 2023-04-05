const {sequelize,DataTypes} = require('../connection')

const PostalDispatch = sequelize.define('postal_dispatch',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  to_title :{
    type:DataTypes.STRING,
    allowNull:false
  },
  reference_no :{
    type:DataTypes.STRING,
    allowNull:false
  },
  note:{
    type:DataTypes.STRING,
    allowNull:true
  },
  address:{
    type:DataTypes.STRING,
    allowNull:true
  },
  from_title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  date:{
    type:DataTypes.DATEONLY,
    allowNull:true,
    defaultValue:DataTypes.NOW
  }

})

// PostalDispatch.sync({alter:true})
module.exports = PostalDispatch