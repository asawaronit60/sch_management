const {sequelize,DataTypes} = require('../connection')

const PostalReceive = sequelize.define('postal_receive',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  to_title :{
    tpye:DataTypes.STRING,
    allowNull:false
  },
  reference_no :{
    tpye:DataTypes.STRING,
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
    tpye:DataTypes.DATEONLY,
    allowNull:false
  },
  document:{
    type:DataTypes.STRING,
    allowNull:true
  }

})

module.exports = PostalReceive