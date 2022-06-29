const {sequelize,DataTypes} = require('../connection')

const conferences = sequelize.define('conferences',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  date:{
    type:DataTypes.DATEONLY,
    defaultValue:DataTypes.NOW
  },
  duration:{
    type:DataTypes.FLOAT,
    defaultValue:null
  },
  role_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'user_roles',
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
  program_id:{
    type:DataTypes.INTEGER,
    references:{
      model:'classes',
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
  host_video:{
    type:DataTypes.INTEGER,
    defaultValue:1
  },
  client_video:{
    type:DataTypes.INTEGER,
    defaultValue:1
  },
  description:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  status:{
    type:DataTypes.INTEGER,
    defaultValue:1
  }

})

module.exports = conferences