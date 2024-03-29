const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')
const { sequelize } = require('./connection')
const app = express()
const createDirectory  = require('./directories')
const globalErrorHandler = require('./utils/errorHandler')

const admissionEnquiry = require('./routes/admissionEnquiry')
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

const book = require('./routes/bookList')
const bookIssue = require('./routes/bookIssue')
const libraryMember = require('./routes/libraryMember')

const session = require('./routes/session')
const generalSetting = require('./routes/generalSettings')
const notificationSetting = require('./routes/notificationSettings')
const smsSetting = require('./routes/smsSetting')
const emailSetting = require('./routes/emailSettings')
const currencySetting = require('./routes/currencySetting')
const languageSetting = require('./routes/languageSetting')
const fileImageTypeSetting = require('./routes/fileImageType')
const headerFooterSetting = require('./routes/headerFooter')
const frontCmsSetting = require('./routes/frontCmsSetting')
const onlineAdmissionSetting = require('./routes/onlineAdmissionSetting')
const captchaSetting = require('./routes/captchaSetting')
const studentProfileUpdateSetting = require('./routes/studentProfileUpdateSetting')
const systemFieldSetting = require('./routes/systemFieldSetting')
const moduleSetting = require('./routes/moduleSetting')

const batch = require('./routes/batch')
const category = require('./routes/category')
const onlineAdmission = require('./routes/onlineAdmission')
const userRole = require('./routes/userRole')
const purpose = require('./routes/purpose')
const complaintType = require('./routes/complaintType')
const source = require('./routes/source')
const reference = require('./routes/reference')

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
// const StaffPaySlip = require('./routes/staffPayslip')
const paySlipAllowance = require('./routes/paySlipAllowance')
// const staffLeaveRequest = require('./routes/staffLeaveRequest')

const applyLeave = require('./routes/applyLeave')
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
const staffIdCard = require('./routes/staffIdCard')

//zoom_live_course
const zoomSetting = require('./routes/zoomSetting')
const conference = require('./routes/conferences')
const zoomMeeting = require('./routes/zoomMeeting')
const zoomLiveClass = require('./routes/zoomLiveClass')

const gmeetLiveClass = require('./routes/gmeetLiveClass')
const gmeetLiveMeeting = require('./routes/gmeetLiveMeeting')
const gmeetSettings = require('./routes/googleMeetSettings')
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

//downloads center
const contentType = require('./routes/contentType')
const downloadContent = require('./routes/downloadContent')
const videoTutorial = require('./routes/videoTutorial')

//frontcms
const mediaManager = require('./routes/mediaManager')
const frontCmsEvent = require('./routes/frontCmsEvent')
const frontCmsGallery = require('./routes/frontCmsGallery')
const frontCmsNews = require('./routes/frontCmsNews')
const frontCmsPage = require('./routes/frontCmsPages')
const frontCmsBanner = require('./routes/frontCmsBanner')
const frontCmsMenu = require('./routes/frontCmsMenu')
const frontCmsMenuItem = require('./routes/frontCmsMenuItem')

//academics
const classes = require('./routes/class')
const section = require('./routes/section')
const subjects = require('./routes/subject')
const subjectGroups = require('./routes/subjectGroups')
const classTeacher = require('./routes/classTeacher')
const classTimetable = require('./routes/ClassTimetable')


//examination
const admitCardDesign = require('./routes/admitCardDesign')
const marksheetDesign = require('./routes/maskSheetDesign')

const examType = require('./routes/examTypes')
const exam = require('./routes/exams')
const marksGrade = require('./routes/marksGrade')
const examGroup = require('./routes/examGroup')
const examDivision = require('./routes/examDivision')

//online exam and question
const onlineExam = require('./routes/onlineExam')


//hostel
const roomType = require('./routes/hostelroomType')
const hostel = require('./routes/hostel')
const hostelRoom = require('./routes/hostelRoom')

//transport
const vehicle = require('./routes/vehicle')
const pickupPoint = require('./routes/pickupPoints')
const routes = require('./routes/routes')
const transportFeeMaster = require('./routes/trasnportFeeMaster')
const vehicleRoute = require('./routes/vehicleRoute')
const routePickupPoint = require('./routes/routePickupPoint')


//communicate
const emailSmsTemplate = require('./routes/emailSmsTemplate')
const sendMail = require('./routes/sendEmail')

const report = require('./routes/report')

app.get('/', (req, res) => {
  res.send('Hello World')
})

const alter = false
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


sequelize.authenticate().then(() => {
  console.log('connected to db successfully')
})
// sequelize.sync({ alter, logging:false}).catch(err => {
//   console.log(err)
// })

createDirectory()


app.use(cors({
  origin: '*',
  methods: ['GET, POST, OPTIONS, PUT, PATCH, DELETE'],
  allowedHeaders: ['Access-Control-Request-Headers', 'Accept-Encoding', 'X-Requested-With,content-type','Authorization'],
  credentials: true
}))


app.use('/api/v1/admissionEnquiry', admissionEnquiry)
app.use('/api/v1/visitorBook', visitorBook)
app.use('/api/v1/complaint', complaint)
app.use('/api/v1/user', user)
app.use('/api/v1/phoneCallLog', phoneCallLogs)
app.use('/api/v1/postalDispatch', postalDispatch)
app.use('/api/v1/postalReceive', postalReceive)
app.use('/api/v1/student', student)
app.use('/api/v1/disableReason', disableReason)
app.use('/api/v1/studentHouse', studentHouse)


app.use('/api/v1/studentAttendence', studentAttendence)

app.use('/api/v1/incomeHead', incomeHead)
app.use('/api/v1/income', income)
app.use('/api/v1/expenseHead', expenseHead)
app.use('/api/v1/expense', expense)

app.use('/api/v1/book', book)
app.use('/api/v1/libraryMember',libraryMember)



//settings
app.use('/api/v1/generalSetting', generalSetting)
app.use('/api/v1/session', session)
app.use('/api/v1/notificationSetting', notificationSetting)
app.use('/api/v1/smsSetting', smsSetting)
app.use('/api/v1/emailSetting',emailSetting)
app.use('/api/v1/currencySetting',currencySetting)
app.use('/api/v1/languageSetting',languageSetting)
app.use('/api/v1/fileImageTypeSetting',fileImageTypeSetting)
app.use('/api/v1/headerFooterSetting',headerFooterSetting)
app.use('/api/v1/frontCmsSetting',frontCmsSetting)
app.use('/api/v1/onlineAdmissionSetting',onlineAdmissionSetting)
app.use('/api/v1/captchaSetting',captchaSetting)
app.use('/api/v1/studentProfileUpdateSetting',studentProfileUpdateSetting)
app.use('/api/v1/systemFieldSetting',systemFieldSetting)
app.use('/api/v1/moduleSetting',moduleSetting)


app.use('/api/v1/level', level)
app.use('/api/v1/batch', batch)
app.use('/api/v1/bookIssue', bookIssue)
app.use('/api/v1/category', category)
app.use('/api/v1/onlineAdmission', onlineAdmission)
app.use('/api/v1/userRole', userRole)
app.use('/api/v1/purpose', purpose)
app.use('/api/v1/complaintType', complaintType)
app.use('/api/v1/source', source)
app.use('/api/v1/reference', reference)
// app.use('/api/v1/semester', semester)
// app.use('/api/v1/programGroup', programGroup)
// app.use('/api/v1/CourseGroup', CourseGroup)

//human resource
app.use('/api/v1/staffDesignation', staffDesignation)
app.use('/api/v1/department', department)

app.use('/api/v1/staff', staff)
app.use('/api/v1/staffRole', staffRole)

app.use('/api/v1/StaffRating', StaffRating)

app.use('/api/v1/staffPayroll', staffPayroll)
// app.use('/api/v1/StaffPaySlip', StaffPaySlip)
app.use('/api/v1/paySlipAllowance', paySlipAllowance)

// app.use('/api/v1/staffLeaveRequest', staffLeaveRequest)
app.use('/api/v1/leaveType', leaveType)
app.use('/api/v1/applyLeave',applyLeave)

app.use('/api/v1/staffAttendanceType', staffAttendanceType)
app.use('/api/v1/staffAttendance', staffAttendance)

//assignment 
app.use('/api/v1/addAssignment', addAssignment)


//Inventory
app.use('/api/v1/itemSupplier', itemSupplier)
app.use('/api/v1/itemStore', itemStore)
app.use('/api/v1/itemCategory', itemCategory)
app.use('/api/v1/item', item)
app.use('/api/v1/itemStock', itemStock)
app.use('/api/v1/issueItem', issueItem)


//certificates
app.use('/api/v1/certificate', certificate)
app.use('/api/v1/idCard', idCard)
app.use('/api/v1/staffIdCard',staffIdCard)

//zoom_live_course
app.use('/api/v1/zoomSetting', zoomSetting)
app.use('/api/v1/conference', conference)
app.use('/api/v1/zoomMeeting', zoomMeeting)
app.use('/api/v1/zoomLiveClass',zoomLiveClass)

app.use('/api/v1/gmeetLiveClass',gmeetLiveClass)
app.use('/api/v1/gmeetLiveMeeting',gmeetLiveMeeting)
app.use('/api/v1/gmeetSettings',gmeetSettings)


//alumnievents
app.use('/api/v1/alumniEvents', alumniEvents)

//milestone
app.use('/api/v1/lesson', lesson)
app.use('/api/v1/topic', topic)



//fee
app.use('/api/v1/feeGroup', feeGroup)
app.use('/api/v1/feeCategory', feeCategory)
app.use('/api/v1/feeType', feeType)
app.use('/api/v1/feeDiscount', feeDiscount)
app.use('/api/v1/feeMaster', feeMaster)
app.use('/api/v1/feeReminder', feeReminder)

//content type
app.use('/api/v1/contentType',contentType)
app.use('/api/v1/downloadContent',downloadContent)
app.use('/api/v1/videoTutorial',videoTutorial)

//front cms
app.use('/api/v1/mediaManager',mediaManager)
app.use('/api/v1/frontCmsEvent',frontCmsEvent)
app.use('/api/v1/frontCmsGallery',frontCmsGallery)
app.use('/api/v1/frontCmsNews',frontCmsNews)
app.use('/api/v1/frontCmsPage',frontCmsPage)
app.use('/api/v1/frontCmsBanner',frontCmsBanner)
app.use('/api/v1/frontCmsMenu',frontCmsMenu)
app.use('/api/v1/frontCmsMenuItem',frontCmsMenuItem)


//academics
app.use('/api/v1/classTeacher', classTeacher)////subject --> module
app.use('/api/v1/module', subjects)////subject --> module
app.use('/api/v1/class', classes)
app.use('/api/v1/section', section)
app.use('/api/v1/subjectGroups',subjectGroups)
app.use('/api/v1/classTimetable',classTimetable)



///examss
app.use('/api/v1/admitCardDesign',admitCardDesign)
app.use('/api/v1/marksheetDesign',marksheetDesign)
app.use('/api/v1/examType',examType)
app.use('/api/v1/exam',exam)
app.use('/api/v1/marksGrade',marksGrade)
app.use('/api/v1/examGroup',examGroup)
app.use('/api/v1/examDivision',examDivision)

//online exams and question

app.use('/api/v1/onlineExam',onlineExam)

//hostel
app.use('/api/v1/roomType',roomType)
app.use('/api/v1/hostel',hostel)
app.use('/api/v1/hostelRoom',hostelRoom)





//transport
app.use('/api/v1/vehicle/',vehicle)
app.use('/api/v1/pickupPoint/',pickupPoint)
app.use('/api/v1/routes',routes)
app.use('/api/v1/transportFeeMaster/',transportFeeMaster)
app.use('/api/v1/vehicleRoute/',vehicleRoute)
app.use('/api/v1/routePickupPoint/',routePickupPoint)


//communicate

app.use('/api/v1/emailSmsTemplate',emailSmsTemplate)
app.use('/api/v1/sendMail',sendMail)


app.use('/api/v1/report',report)


app.get('/api/v1/file/',(req,res)=>{  
  // res.contentType('jpg')
  res.sendFile(`${__dirname}/${req.query.path}`)

})

app.use(globalErrorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`)
})

