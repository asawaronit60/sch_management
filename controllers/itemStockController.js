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
    
    let [results] = await sequelize.query(`
    
    select it.id, it.name , ct.item_category , its.item_supplier ,itms.quantity, itst.item_store , itms.purchase_price , itms.date from 
    items as it , item_categories as ct , item_suppliers as its , item_stores as itst , stock_items as itms
    where 
    itms.item_id = it.id and 
    it.itemCategoryId = ct.id and
    itms.supplier_id = its.id and
    itms.store_id = itst.id  
    
    
    ;`)

    res.status(200).json({
      status:'success',
      data:results
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

  if(req.body.attachment)
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