const {sequelize,DataTypes} = require('../connection')

const BookIssue = sequelize.define('book_issue',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  book_id:{

  },
  duereturn_date:{

  },
  return_date:{

  },
  issue_date:{

  },
  is_returned:{

  },
  member_id:{

  },
  is_active:{
    
  }
})