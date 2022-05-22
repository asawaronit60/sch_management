const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const {sequelize} = require('./connection')
const app = express()

const admissionEnquiry  = require('./routes/admissionEnquiry')
const visitorBook = require('./routes/visirtorBook')


app.get('/',(req,res)=>{
  res.send('Hello Project')
})

const alter = false

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


app.listen(process.env.PORT,()=>{
  console.log(`server is running on port ${process.env.PORT}`)
})