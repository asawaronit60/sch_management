const { sequelize, DataTypes } = require('../connection')

const staffIdCard = sequelize.define('staff_id_card', {

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
  enable_staff_id: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  enable_staff_name: {
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  enable_designation:{
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  enable_department:{
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
  enable_date_of_joining:{
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
  enable_design_type:{
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  enable_barcode:{
    type: DataTypes.SMALLINT,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('active','inactive'),
    defaultValue:'active'
  },

})


module.exports = staffIdCard