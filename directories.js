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
  

  if (!fs.existsSync(`${__dirname}/public/certificates`)) {
    fs.mkdir(`${__dirname}/public/certificates`, (err) => {
    })
  }

  if (!fs.existsSync(`${__dirname}/public/certificates/idCard`)) {
    fs.mkdir(`${__dirname}/public/certificates/idCard`, (err) => {
    })
  }
  
  if (!fs.existsSync(`${__dirname}/public/certificates/student_certificate`)) {
    fs.mkdir(`${__dirname}/public/certificates/student_certificate`, (err) => {
    })
  }


  if (!fs.existsSync(`${__dirname}/public/materials`)) {
    fs.mkdir(`${__dirname}/public/materials`, (err) => {
    })
}


if (!fs.existsSync(`${__dirname}/public/incomeDocuments`)) {
  fs.mkdir(`${__dirname}/public/incomeDocuments`, (err) => {
  })

}

if (!fs.existsSync(`${__dirname}/public/expenseDocuments`)) {
  fs.mkdir(`${__dirname}/public/expenseDocuments`, (err) => {
  })
 }

 fs.mkdir(`${__dirname}/public/mediaManager`, (err) => {
})

fs.mkdir(`${__dirname}/public/studentDetails`, (err) => {
})



// if (!fs.existsSync(`${__dirname}/public/materials/assignments`)) {
  //   fs.mkdir(`${__dirname}/public/materials/assignments`, (err) => {
  //   })
  // }
  
  // if (!fs.existsSync(`${__dirname}/public/materials/studyMaterials`)) {
  //   fs.mkdir(`${__dirname}/public/materials/study_materials`, (err) => {
  //   })
  // }
  
  // if (!fs.existsSync(`${__dirname}/public/materials/syllabus`)) {
  //   fs.mkdir(`${__dirname}/public/materials/syllabus`, (err) => {
  //   })
  // }
  
  // if (!fs.existsSync(`${__dirname}/public/materials/otherDownloads`)) {
  //   fs.mkdir(`${__dirname}/public/materials/other_downloads`, (err) => {
  //   })
  // }
  
  }


module.exports = createDirectory