const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const cookieParser = require('cookie-parser')
const cors = require('cors')
const {sequelize} = require('./connection')
const app = express()

const admissionEnquiry  = require('./routes/admissionEnquiry')
const visitorBook = require('./routes/visirtorBook')
const complaint = require('./routes/complaint')
const user = require('./routes/user')
const phoneCallLogs = require('./routes/phoneCallLogs')
const postalDispatch = require('./routes/postalDispatch')
const postalReceive = require('./routes/postalReceive')
const student = require('./routes/student')
const disableReason = require('./routes/disableReason')
const studentCategory = require('./routes/studentCategory')
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
app.use('/api/v1/generalSetting',generalSetting)
app.use('/api/v1/session',session)
app.use('/api/v1/notificationSetting',notificationSetting)
app.use('/api/v1/smsSetting',smsSetting)
app.use('/api/v1/batch',batch)
app.use('/api/v1/bookIssue',bookIssue)
app.use('/api/v1/category',category)


app.listen(process.env.PORT,()=>{
  console.log(`server is running on port ${process.env.PORT}`)
})

