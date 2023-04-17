const {sequelize,DataTypes} = require('../connection')
const Hostel = require('./Hostel')
const HostelRoomType = require('./HostelRoomType')

const hostelRoom = sequelize.define('hostel_room',{

  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  room_number_name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  no_of_beds:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  cost_per_bed:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    defaultValue:null
  },
  active:{
    type:DataTypes.STRING,
    defaultValue:'active'
  }

})


hostelRoom.belongsTo(Hostel,{foreignKey:'hostel_id',targetKey:'id',onDelete:'CASCADE'})
hostelRoom.belongsTo(HostelRoomType,{foreignKey:'room_type_id',targetKey:'id',onDelete:null})
// hostelRoom.sync({alter:true})
module.exports = hostelRoom;