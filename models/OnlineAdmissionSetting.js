const { sequelize, DataTypes } = require('../connection')

exports.onlineAdmissionFormSetting = sequelize.define('online_admission_form_setting', {

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  online_admission: {
    type: DataTypes.INTEGER,
    defaultValue: '1'
  },
  online_admission_payment_option: {
    type: DataTypes.INTEGER,
    defaultValue: '1'
  },
  online_admission_fee: {
    type: DataTypes.FLOAT
  },
  online_admission_admission_form: {
    type: DataTypes.STRING
  },
  online_admission_instructions: {
    type: DataTypes.STRING
  },
  online_admission_terms_and_conditions: {
    type: DataTypes.STRING
  },

})
  .afterSync(() => {
    this.onlineAdmissionFormSetting.findByPk(1).then(async (resp) => {
      if (!resp) {
        await this.onlineAdmissionFormSetting.create({
          online_admission: 1,
          online_admission_payment_option: 1,
          online_admission_fee: 100,
          online_admission_admission_form: null,
          online_admission_instructions: 'Please enter your institution online admission instructions here.',
          online_admission_terms_and_conditions: ' Please enter your institution online admission terms & conditions here.'

        })
      }
    })
  })


