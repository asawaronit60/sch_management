const { sequelize, DataTypes } = require('../connection')

const IdCard = sequelize.define('id_card', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  school_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  school_address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  background: {
    type: DataTypes.STRING,
    allowNull: true
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sign_image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  header_color: {
    type: DataTypes.STRING,
    allowNull: true
  },
  enable_admission_no: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  enable_student_name: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  enable_class: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  enable_fathers_name: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  enable_mothers_name: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  enable_address: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  enable_phone: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  enable_dob: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  enable_blood_group: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('active','inactive'),
    defaultValue:'active'
  },

})

IdCard.sync({alter:true})

module.exports = IdCard