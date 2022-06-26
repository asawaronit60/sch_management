const {sequelize,DataTypes} = require('../connection')

const addAssingment = sequelize.define('add_assignment',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  program_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'classes',
      key:'id'
    }
  },
  staff_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'staffs',
      key:'id'
    }
  },
  module_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'modules',
      key:'id'
    }
  },
  intake_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'sessions',
      key:'id'
    }
  },
  course_group_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'course_groups',
      key:'id'
    }
  },
  assignment_date:{
    type:DataTypes.DATEONLY,
    defaultValue:DataTypes.NOW
  },
  submission_date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  },
  document:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  evaluation_date:{
    type:DataTypes.DATEONLY,
    defaultValue:null
  }

})

module.exports = addAssingment