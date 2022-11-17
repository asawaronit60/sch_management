const {sequelize,DataTypes} = require('../connection')
const Menu = require('../models/FrontcmsMenu')
const Page = require('../models/FrontCmsPages')

const MenuItem = sequelize.define('front_cms_menu_item',{

    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    menu_item:{
      type:DataTypes.STRING
    },
    open_new_tab:{
      type:DataTypes.ENUM('yes','no'),
      defaultValue:'no'
    },
    external_url_address:{
      type:DataTypes.STRING
    }

})

MenuItem.belongsTo(Menu,{foreignKey:'menu_id',targetKey:'id'})
MenuItem.belongsTo(Page,{foreignKey:'page_id',targetKey:'id'})

module.exports = MenuItem