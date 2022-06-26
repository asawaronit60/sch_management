const ItemStock = require('../models/ItemStock')
const api = require('../utils/apiFactory')
const {sequelize} = require('../connection')
const multer = require('multer')

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./public/itemStock`);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
}).single('attachment')


exports.getAllItemStock = async(req,res)=>{

  try {
    
    let data = await sequelize.query(`
    
    select it.name , ct.item_category , its.supplier_name , itst.item_store , itms.purchase_price , itms.date from 
    items as it , item_categorys as ct , item_suppliers as its , item_store as itst , item_stock as itms
    where 
    itms.item_id = it.id and 
    id.item_category_id = ct.id
    itms.supplier_id = its.id and
    itms.store_id = itst.id  
    
    
    ;`)

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    res.status(400).json({
      status:'fail',
      message:err.message
    })
  }

}

exports.createItemStock = async(req,res)=>{

try {

 upload(req,res,async(err)=>{

  req.body.attachment = req.file.filename
  await ItemStock.create(req.body)

  res.status(200).json({
    status:'success',
    message:'Item sock created!'
  })

})

} catch (err) {
  res.status(400).json({
    status:'fail',
    message:err.message
  })
}

}

exports.deleteItemStock = api.delete(ItemStock)
exports.updateItemStock = api.update(ItemStock)