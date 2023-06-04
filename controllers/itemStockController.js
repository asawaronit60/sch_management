const ItemStock = require('../models/ItemStock')
const api = require('../utils/apiFactory')
const multer = require('multer');
const itemSupplier = require('../models/ItemSupplier');
const item = require('../models/Item');
const itemCategory = require('../models/ItemCategory');
const itemStore = require('../models/ItemStore')

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


exports.getAllItemStock = async(req,res,next)=>{

  try {
    
   let data = await ItemStock.findAll({
    include:[
      {
        model:itemSupplier,
        attributes:['item_supplier']
      },
      {
        model:item,
        attributes:['name']
      },
      {
        model:itemStore,
        attributes:['item_store']
      },
      {
        model:itemCategory,
        attributes:['item_category']
      }
    ]
   })

    res.status(200).json({
      status:'success',
      data
    })

  } catch (err) {
    next(err)
  }

}

exports.createItemStock = async(req,res,next)=>{

try {

 upload(req,res,async(err)=>{

  if(req.file){
    // let pathArr = req.file.path.split("\\")     
    // let path = pathArr.splice(pathArr.indexOf("public"),pathArr.length).join("/")
    req.body.attachment = `/public/itemStock/${req.file.filename}`
}
  
   await ItemStock.create(req.body)

  res.status(200).json({
    status:'success',
    message:'Item sock created!',
    data:req.body
  })

})

} catch (err) {
next(err)
}

}

exports.deleteItemStock = api.delete(ItemStock)
exports.updateItemStock = api.update(ItemStock)