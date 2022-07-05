const {sequelize,DataTypes} = require('../connection')

const PostalReceive = sequelize.define('postal_receive',{

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
    allowNull:false,
    defaultValue:DataTypes.NOW
  },
  document:{
    type:DataTypes.STRING,
    allowNull:true
  }

})

module.exports = PostalReceive