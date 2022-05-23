const {sequelize,DataTypes} = require('../connection')

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{
      isEmail:true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'UNBLOCK'
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'USER'
  },
  date_of_birth: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
})


module.exports = User