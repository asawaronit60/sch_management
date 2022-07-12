const fs = require('fs')
const path = require('path')

function createDirectory(){

  if (!fs.existsSync(`${__dirname}/../public`)) {
    fs.mkdir(`${__dirname}/public`, (err) => {
    })
  }
  
  if (!fs.existsSync(`${__dirname}/public/addAssignment`)) {
    fs.mkdir(`${__dirname}/public/addAssignment`, (err) => {
    })
  }
  
  if (!fs.existsSync(`${__dirname}/public/onlineAdmission`)) {
    fs.mkdir(`${__dirname}/public/onlineAdmission`, (err) => {
    })
  }
  
  if (!fs.existsSync(`${__dirname}/public/itemStock`)) {
    fs.mkdir(`${__dirname}/public/itemStock`, (err) => {
    })
  }
  
  if (!fs.existsSync(`${__dirname}/public/idCard`)) {
    fs.mkdir(`${__dirname}/public/idCard`, (err) => {
    })
  }
  
  if (!fs.existsSync(`${__dirname}/public/materials`)) {
    fs.mkdir(`${__dirname}/public/materials`, (err) => {
    })
  }
  if (!fs.existsSync(`${__dirname}/public/materials/assignments`)) {
    fs.mkdir(`${__dirname}/public/materials/assignments`, (err) => {
    })
  }
  
  if (!fs.existsSync(`${__dirname}/public/materials/studyMaterials`)) {
    fs.mkdir(`${__dirname}/public/materials/studyMaterials`, (err) => {
    })
  }
  
  if (!fs.existsSync(`${__dirname}/public/materials/syllabus`)) {
    fs.mkdir(`${__dirname}/public/materials/syllabus`, (err) => {
    })
  }
  
  if (!fs.existsSync(`${__dirname}/public/materials/otherDownloads`)) {
    fs.mkdir(`${__dirname}/public/materials/otherDownloads`, (err) => {
    })
  }
  
}


module.exports = createDirectory