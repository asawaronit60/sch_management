const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const cookieParser = require('cookie-parser')
const cors = require('cors')
const {sequelize} = require('./connection')
const app = express()
const fs = require('fs')

const admissionEnquiry  = require('./routes/admissionEnquiry')
const visitorBook = require('./routes/visirtorBook')
const complaint = require('./routes/complaint')
const user = require('./routes/user')
const phoneCallLogs = require('./routes/phoneCallLogs')

const postalDispatch = require('./routes/postalDispatch')
const postalReceive = require('./routes/postalReceive')

const student = require('./routes/student')
const disableReason = require('./routes/disableReason')
const studentHouse = require('./routes/studentHouse')
const studentAttendence = require('./routes/studentAttendence')
const incomeHead = require('./routes/incomehead')
const income = require('./routes/income')
const expenseHead = require('./routes/expenseHead')
const expense = require('./routes/expense')
const classes = require('./routes/class')
const section = require('./routes/section')
const book = require('./routes/bookList')
const generalSetting = require('./routes/generalSettings')
const session = require('./routes/session')
const notificationSetting = require('./routes/notificationSettings')
const smsSetting = require('./routes/smsSetting')
const batch = require('./routes/batch')
const bookIssue = require('./routes/bookIssue')
const category = require('./routes/category')
const onlineAdmission = require('./routes/onlineAdmission')
const userRole = require('./routes/userRole')
const purpose = require('./routes/purpose')
const complaintType = require('./routes/complaintType')
const source = require('./routes/source')
const reference = require('./routes/reference')
const semester = require('./routes/semester')
const modulee = require('./routes/module')
const programGroup  = require('./routes/programGroup')
const CourseGroup = require('./routes/courseGroup')
const level = require('./routes/level')

const staffDesignation = require('./routes/staffDesignation')
const department = require('./routes/department')
const staff = require('./routes/staff')
const staffRole = require('./routes/staffRole')
const StaffRating = require('./routes/staffRating')
const staffAttendanceType = require('./routes/staffAttendanceType')
const staffAttendance = require('./routes/staffAttendance')
const staffPayroll = require('./routes/staffPayroll')
const leaveType = require('./routes/leaveType')
const StaffPaySlip = require('./routes/staffPayslip')
const paySlipAllowance = require('./routes/paySlipAllowance')
const staffLeaveRequest = require('./routes/staffLeaveRequest')

//assignment

const addAssignment = require('./routes/addAssignment')

//items
const itemSupplier = require('./routes/itemSupplier')
const itemStore = require('./routes/itemStore')
const itemCategory = require('./routes/itemCategory')
const item = require('./routes/item')
const itemStock = require('./routes/itemStock')
const issueItem = require('./routes/issueItem')

//certificates
const certificate = require('./routes/certificate')
const idCard = require('./routes/idCard')


//zoom_live_course
const zoomSetting = require('./routes/zoomSetting')
const conference = require('./routes/conferences')
const zoomMeeting = require('./routes/zoomMeeting')

//alumnni
const alumniEvents = require('./routes/alumniEvents')

//milestone
const lesson = require('./routes/lesson')
const topic = require('./routes/topics')

//fee
const feeGroup = require('./routes/feeGroup')
const feeCategory = require('./routes/feeCategory')
const feeType = require('./routes/feeType')
const feeDiscount = require('./routes/feeDiscount')
const feeMaster = require('./routes/feeMaster')
const feeReminder = require('./routes/feeReminder')







app.get('/',(req,res)=>{
  res.send('Hello Project from git fetch...')
})

const alter = false


app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

sequelize.authenticate().then(()=>{
    console.log('connected to db successfully')
})
sequelize.sync({alter}).catch(err=>{
    console.log(err)
})

if(!fs.existsSync(`${__dirname}/public`)){
  fs.mkdir(`${__dirname}/public`,(err)=>{
  })
}

if(!fs.existsSync(`${__dirname}/public/addAssignment`)){
  fs.mkdir(`${__dirname}/public/addAssignment`,(err)=>{
  })
}

if(!fs.existsSync(`${__dirname}/public/onlineAdmission`)){
  fs.mkdir(`${__dirname}/public/onlineAdmission`,(err)=>{
  })
}

if(!fs.existsSync(`${__dirname}/public/itemStock`)){
  fs.mkdir(`${__dirname}/public/itemStock`,(err)=>{
  })
}

if(!fs.existsSync(`${__dirname}/public/idCard`)){
  fs.mkdir(`${__dirname}/public/idCard`,(err)=>{
  })
}


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.use('/api/v1/admissionEnquiry',admissionEnquiry)
app.use('/api/v1/visitorBook',visitorBook)
app.use('/api/v1/complaint',complaint)
app.use('/api/v1/user',user)
app.use('/api/v1/phoneCallLog',phoneCallLogs)
app.use('/api/v1/postalDispatch',postalDispatch)
app.use('/api/v1/postalReceive',postalReceive)
app.use('/api/v1/student',student)
app.use('/api/v1/disableReason',disableReason)
app.use('/api/v1/studentHouse',studentHouse)
app.use('/api/v1/studentAttendence',studentAttendence)
app.use('/api/v1/incomeHead',incomeHead)
app.use('/api/v1/income',income)
app.use('/api/v1/expenseHead',expenseHead)
app.use('/api/v1/expense',expense)
app.use('/api/v1/class',classes)
app.use('/api/v1/section',section)
app.use('/api/v1/book', book)
app.use('/api/v1/module', modulee)////subject --> module

//settings
app.use('/api/v1/generalSetting',generalSetting)
app.use('/api/v1/session',session)
app.use('/api/v1/notificationSetting',notificationSetting)
app.use('/api/v1/smsSetting',smsSetting)
app.use('/api/v1/level',level)
app.use('/api/v1/batch',batch)
app.use('/api/v1/bookIssue',bookIssue)
app.use('/api/v1/category',category)
app.use('/api/v1/onlineAdmission',onlineAdmission)
app.use('/api/v1/userRole',userRole)
app.use('/api/v1/purpose',purpose)
app.use('/api/v1/complaintType',complaintType)
app.use('/api/v1/source',source)
app.use('/api/v1/reference',reference)
app.use('/api/v1/semester',semester)
app.use('/api/v1/programGroup',programGroup)
app.use('/api/v1/CourseGroup',CourseGroup)

//human resource
app.use('/api/v1/staffDesignation',staffDesignation)
app.use('/api/v1/department',department)
app.use('/api/v1/staff',staff)
app.use('/api/v1/staffRole',staffRole)
app.use('/api/v1/StaffRating',StaffRating)
app.use('/api/v1/staffAttendanceType',staffAttendanceType)
app.use('/api/v1/staffAttendance',staffAttendance)
app.use('/api/v1/staffPayroll',staffPayroll)
app.use('/api/v1/leaveType',leaveType)
app.use('/api/v1/StaffPaySlip',StaffPaySlip)
app.use('/api/v1/paySlipAllowance',paySlipAllowance)
app.use('/api/v1/staffLeaveRequest',staffLeaveRequest)


//assignment 
app.use('/api/v1/addAssignment',addAssignment)


//Inventory
app.use('/api/v1/itemSupplier',itemSupplier)
app.use('/api/v1/itemStore',itemStore)
app.use('/api/v1/itemCategory',itemCategory)
app.use('/api/v1/item',item)
app.use('/api/v1/itemStock',itemStock)
app.use('/api/v1/issueItem',issueItem)


//certificates
app.use('/api/v1/certificate',certificate)
app.use('/api/v1/idCard',idCard)

//zoom_live_course
app.use('/api/v1/zoomSetting',zoomSetting)
app.use('/api/v1/conference',conference)
app.use('/api/v1/zoomMeeting',zoomMeeting)

//alumnievents
app.use('/api/v1/alumniEvents',alumniEvents)

//milestone
app.use('/api/v1/lesson',lesson)
app.use('/api/v1/topic',topic)



//fee
app.use('/api/v1/feeGroup',feeGroup)
app.use('/api/v1/feeCategory',feeCategory)
app.use('/api/v1/feeType',feeType)
app.use('/api/v1/feeDiscount',feeDiscount)
app.use('/api/v1/feeMaster',feeMaster)
app.use('/api/v1/feeReminder',feeReminder)



app.listen(process.env.PORT,()=>{
  console.log(`server is running on port ${process.env.PORT}`)
})

