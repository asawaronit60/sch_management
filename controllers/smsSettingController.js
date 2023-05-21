/* This is a module that exports functions for getting and updating SMS settings for various SMS
providers. It requires the `SmsSettings` model and `ApiFactory` utility module. The `getData`
function takes a `Model` argument and returns an async function that retrieves data from the
database using the `findByPk` method and sends a JSON response with the retrieved data. The
`updateData` function takes a `Model` argument and returns an async function that updates data in
the database using the `update` method and sends a JSON response with a success message. The
exported functions use these functions with specific `SmsSetting` models to handle GET and PUT
requests for each SMS provider's settings. */

const SmsSetting = require('../models/SmsSettings')
const ApiFactory = require('../utils/apiFactory')

let getData = (Model) => async (req, res, next) => {

  try {

    let data = await Model.findByPk(1)

    res.status(200).json({
      status: 'succes',
      data
    })

  } catch (err) {
    next(err)
  }

}

let updateData = (Model) => async (req, res, next) => {

  try {

       await Model.update(req.body,{
      where:{
        id:1
      }
    })

    res.status(200).json({
      status: 'succes',
      message:'Data updated successfully'
    })

  } catch (err) {
    next(err)
  }

}

exports.getClickTailSmsSetting = getData(SmsSetting.clicktailSmsSetting)
exports.updateClickTailSmsSetting = updateData(SmsSetting.clicktailSmsSetting)


exports.gettwilioSmsSetting = getData(SmsSetting.twilio)
exports.updatetwilioSmsSetting = updateData(SmsSetting.twilio)


exports.getmsg91SmsSetting = getData(SmsSetting.msg91)
exports.updatemsg91SmsSetting = updateData(SmsSetting.msg91)



exports.gettextLocalSmsSetting = getData(SmsSetting.textLocal)
exports.updatetextLocalSmsSetting = updateData(SmsSetting.textLocal)


exports.getsmsCountrySmsSetting = getData(SmsSetting.smsCountry)
exports.updatesmsCountrySmsSetting = updateData(SmsSetting.smsCountry)



exports.getbulkSmsSmsSetting = getData(SmsSetting.bulkSms)
exports.updatebulkSmsSmsSetting = updateData(SmsSetting.bulkSms)


exports.getmobiReachSmsSetting = getData(SmsSetting.mobiReach)
exports.updatemobiReachSmsSetting = updateData(SmsSetting.mobiReach)



exports.getnexmoSmsSetting = getData(SmsSetting.nexmo)
exports.updatenexmoSmsSetting = updateData(SmsSetting.nexmo)



exports.getafricasTalkingSmsSetting = getData(SmsSetting.africasTalking)
exports.updateafricasTalkingSmsSetting = updateData(SmsSetting.africasTalking)



exports.getsmsEgyptSmsSetting = getData(SmsSetting.smsEgypt)
exports.updatesmsEgyptSmsSetting = updateData(SmsSetting.smsEgypt)



exports.getcustomSmsGatewaySmsSetting = getData(SmsSetting.customSmsGateway)
exports.updatecustomSmsGatewaySmsSetting = updateData(SmsSetting.customSmsGateway)


