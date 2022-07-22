const { sequelize, DataTypes } = require('../connection')

const downloadContent = sequelize.define('download_center', {

 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  content_title: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  content_type: {
    type: DataTypes.INTEGER,
    references: {
      model: 'content_types',
      key: 'id'
    },
    onDelete: 'CASCADE',
    allowNull:false
  },
  intake_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'sessions',
      key: 'id'
    },
    onDelete: 'CASCADE',
    defaultValue:null
  },
  session_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'sections',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  available_for: {
    type: DataTypes.JSON,
    allowNull: false
  },
  available_for_all_courses: {
    type: DataTypes.STRING(200),
    defaultValue: 'no'
  },
  program_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'program_groups',
      key: 'id'
    },
    onDelete: 'CASCADE',
    defaultValue:null
  },
  module_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'modules',
      key: 'id'
    },
    onDelete: 'CASCADE',
    defaultValue:null
  },
  description: {
    type: DataTypes.STRING(500),
    defaultValue: null
  },
  upload_date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  },
  content_file: {
    type: DataTypes.STRING(500),
    defaultValue: null
  }

})


downloadContent.beforeSave((content,options)=>{

    if(content.available_for_all_courses!='no')
      content.available_for_all_courses = 'All Courses'

})

// downloadContent.sync({alter:true})

module.exports = downloadContent