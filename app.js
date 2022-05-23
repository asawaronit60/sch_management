const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const cookieParser = require('cookie-parser')
const {sequelize} = require('./connection')
const app = express()

const admissionEnquiry  = require('./routes/admissionEnquiry')
const visitorBook = require('./routes/visirtorBook')
const complaint = require('./routes/complaint')
const user = require('./routes/user')


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

app.use('/api/v1/admissionEnquiry',admissionEnquiry)
app.use('/api/v1/visitorBook',visitorBook)
app.use('/api/v1/complaint',complaint)
app.use('/api/v1/user',user)

app.listen(process.env.PORT,()=>{
  console.log(`server is running on port ${process.env.PORT}`)
})