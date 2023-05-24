const {sequelize,DataTypes} = require('../connection')

const frontCMSSetting = sequelize.define('front_cms_setting',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  front_cms:{
    type:DataTypes.INTEGER,
    defaultValue:'1'
  },
  sidebar:{
    type:DataTypes.INTEGER,
    defaultValue:'1'
  },
  language_rtl_text_mode:{
    type:DataTypes.INTEGER,
    defaultValue:'1'
  },
  is_news:{
    type:DataTypes.BOOLEAN,
  },
  is_complain:{
    type:DataTypes.BOOLEAN,
  },
  logo:{
    type:DataTypes.STRING
  },
  fav_icon:{
    type:DataTypes.STRING
  },
  footer_text:{
    type:DataTypes.STRING
  },
  cookie_consent:{
    type:DataTypes.STRING
  },
  google_analytics:{
    type:DataTypes.STRING
  },
  whatsapp_url:{
    type:DataTypes.STRING
  },
  facebook_url:{
    type:DataTypes.STRING
  },
  twitter_url:{
    type:DataTypes.STRING
  },
  youtube_url:{
    type:DataTypes.STRING
  },
  googleplus_url:{
    type:DataTypes.STRING
  },
  linkden_url:{
    type:DataTypes.STRING
  },
  instagram_url:{
    type:DataTypes.STRING
  },
  pintrest_url:{
    type:DataTypes.STRING
  },

})
.afterSync(()=>{

  frontCMSSetting.findByPk(1).then(async(resp)=>{

      if(!resp){
          await frontCMSSetting.create({
            front_cms:1,
            sidebar:0,
            language_rtl_text_mode:0,
            is_news:true,
            is_complain:true,
            logo:null,
            fav_icon:null,
            footer_text:null,
            cookie_consent:null,
            google_analytics:null,
            whatsapp_url:null,
            facebook_url:null,
            twitter_url:null,
            youtube_url:null,
            googleplus_url:null,
            linkden_url:null,
            instagram_url:null,
            pintrest_url:null

          })
      }
  })
})


module.exports = frontCMSSetting