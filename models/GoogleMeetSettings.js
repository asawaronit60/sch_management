const {sequelize,DataTypes} = require('../connection')

const googleMeetSettings = sequelize.define('google_meet_settings',{

    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    api_key:{
      type:DataTypes.STRING
    },
    api_secret:{
      type:DataTypes.STRING
    },
    use_google_calender_api:{
      type:DataTypes.STRING
    }

})

module.exports = googleMeetSettings