const onlineAdmission = require('../models/OnlineAdmission')
const ApiFactory = require('../utils/apiFactory')
const { parse, CsvError } = require('csv-parse')
const csv = require('csv-parse')
const multer = require('multer')
const fs = require('fs')

exports.getAllOnlineStudents = ApiFactory.getAll(onlineAdmission)
exports.deleteOnlineStudent = ApiFactory.delete(onlineAdmission)
exports.updateOnlineStudent = ApiFactory.update(onlineAdmission)


exports.createOnlineStudent = async (req, res, next) => {

  try {

    let results = []

    fs.createReadStream(`./onlineAdmission/data.csv`)
      .pipe(parse({}))
      .on('data', (da) => {
        results.push(da)
      })
      .on('end', () => {
        // console.log(results[0],results[1])

        let column = results[0].map((el) => {
          return el.toLowerCase().replace(/ /g, '_')
        })

        console.log(column)
        let resp = results.shift()
        let obj = {}
        for (let i = 0, j = 0; i < column.length, j < resp.length; i++, j++) {
          obj[column[i]] = results[i][i]
        }


        res.send(obj)

      })
      .on('error', (err) => { throw new Error(err) })



  } catch (err) {
    console.log(err)
    next(err)
  }


}


