const { sequelize, DataTypes } = require('../connection')

const moduleSetting = sequelize.define('module_setting', {

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  fees_collection: { type: DataTypes.BOOLEAN },
  income: { type: DataTypes.BOOLEAN },
  expense: { type: DataTypes.BOOLEAN },
  student_attendance: { type: DataTypes.BOOLEAN },
  examination: { type: DataTypes.BOOLEAN },
  download_center: { type: DataTypes.BOOLEAN },
  library: { type: DataTypes.BOOLEAN },
  inventory: { type: DataTypes.BOOLEAN },
  transport: { type: DataTypes.BOOLEAN },
  hostel: { type: DataTypes.BOOLEAN },
  communicate: { type: DataTypes.BOOLEAN },
  front_cms: { type: DataTypes.BOOLEAN },
  front_office: { type: DataTypes.BOOLEAN },
  homework: { type: DataTypes.BOOLEAN },
  certificate: { type: DataTypes.BOOLEAN },
  calendar_to_do_list: { type: DataTypes.BOOLEAN },
  online_examination: { type: DataTypes.BOOLEAN },
  chat: { type: DataTypes.BOOLEAN },
  multi_class: { type: DataTypes.BOOLEAN },
  online_admission: { type: DataTypes.BOOLEAN },
  alumni: { type: DataTypes.BOOLEAN },
  lesson_plan: { type: DataTypes.BOOLEAN },
  zoom_live_classes: { type: DataTypes.BOOLEAN },
  gmeet_live_classes: { type: DataTypes.BOOLEAN },
  online_course: { type: DataTypes.BOOLEAN },
  behaviour_records: { type: DataTypes.BOOLEAN },
  multi_branch: { type: DataTypes.BOOLEAN },
  two_factor_authenticator: { type: DataTypes.BOOLEAN },


})
  .afterSync(() => {

    moduleSetting.findByPk(1).then(async (resp) => {

      if (!resp)
        await moduleSetting.create({

          fees_collection: true,
          income: true,
          expense: true,
          student_attendance: true,
          examination: true,
          download_center: true,
          library: true,
          inventory: true,
          transport: true,
          hostel: true,
          communicate: true,
          front_cms: true,
          front_office: true,
          homework: true,
          certificate: true,
          calendar_to_do_list: true,
          online_examination: true,
          chat: false,
          multi_class: true,
          online_admission: true,
          alumni: true,
          lesson_plan: true,
          zoom_live_classes: true,
          gmeet_live_classes: true,
          online_course: true,
          behaviour_records: false,
          multi_branch: false,
          two_factor_authenticator:false


        })

    })

  })

  module.exports = moduleSetting