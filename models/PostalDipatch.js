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
    allowNull:false
  },
  address:{
    type:DataTypes.STRING,
    allowNull:false
  },
  from_title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  date:{
    type:DataTypes.DATEONLY,
    allowNull:false
  }

})

module.exports = PostalDispatch