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
    allowNull: false
  },
  background: {
    type: DataTypes.STRING,
    allowNull: false
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sign_image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  header_color: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue:null
  },
  enable_admission_no: {
    type: DataTypes.SMALLINT,
    allowNull: true,
    defaultValue:null
  },
  enable_student_name: {
    type: DataTypes.SMALLINT,
    allowNull: true,
    defaultValue:null
  },
  enable_class: {
    type: DataTypes.SMALLINT,
    allowNull: true,
    defaultValue:null
  },
  enable_fathers_name: {
    type: DataTypes.SMALLINT,
    allowNull: true,
    defaultValue:null
  },
  enable_mothers_name: {
    type: DataTypes.SMALLINT,
    allowNull: true,
    defaultValue:null
  },
  enable_address: {
    type: DataTypes.SMALLINT,
    allowNull: true,
    defaultValue:null
  },
  enable_phone: {
    type: DataTypes.SMALLINT,
    allowNull: true,
    defaultValue:null
  },
  enable_dob: {
    type: DataTypes.SMALLINT,
    allowNull: true,
    defaultValue:null
  },
  enable_blood_group: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  status: {
    type: DataTypes.SMALLINT,
    allowNull: true,
    defaultValue:1
  },

})

module.exports = IdCard