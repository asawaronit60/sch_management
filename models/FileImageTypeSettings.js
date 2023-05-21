const {sequelize,DataTypes} = require('../connection')

exports.fileType = sequelize.define('file_type',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  allowed_extentions:{
    type:DataTypes.STRING,
    allowNull:false
  },
  allowed_mimetypes:{
    type:DataTypes.TEXT,
    allowNull:false
  },
  upload_size:{
    type:DataTypes.FLOAT
  }

})
// .sync({alter:true})
.afterSync(()=>{

  this.fileType.findByPk(1).then(async resp=>{
      if(!resp){
        await this.fileType.create({
          allowed_extentions:'pdf, zip, jpg, jpeg, png, txt, 7z, gif, csv, docx, mp3, mp4, accdb, odt, ods, ppt, pptx, xlsx, wmv, jfif, apk, ppt, bmp, jpe, mdb, rar, xls, svg',
          allowed_mimetypes:'application/pdf, image/zip, image/jpg, image/png, image/jpeg, text/plain, application/x-zip-compressed, application/zip, image/gif, text/csv, application/vnd.openxmlformats-officedocument.wordprocessingml.document, audio/mpeg, application/msaccess, application/vnd.oasis.opendocument.text, application/vnd.oasis.opendocument.spreadsheet, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, video/x-ms-wmv, video/mp4, image/jpeg, application/vnd.android.package-archive, application/x-msdownload, application/vnd.ms-powerpoint, image/bmp, image/jpeg, application/msaccess, application/vnd.ms-excel, image/svg+xml',
          upload_size:100048576,

        })
      }
  })
})


exports.imageType = sequelize.define('image_type',{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  allowed_extentions:{
    type:DataTypes.STRING,
    allowNull:false
  },
  allowed_mimetypes:{
    type:DataTypes.TEXT,
    allowNull:false
  },
  upload_size:{
    type:DataTypes.FLOAT
  }

})
// .sync({alter:true})
.afterSync(()=>{
  this.imageType.findByPk(1).then(async resp=>{
      if(!resp){
        await this.imageType.create({
          allowed_extentions:'jfif, png, jpe, jpeg, jpg, bmp, gif, svg',
          allowed_mimetypes:'image/jpeg, image/png, image/jpeg, image/jpeg, image/bmp, image/gif, image/x-ms-bmp, image/svg+xml',
          upload_size:100048576,

        })
      }
  })
})

