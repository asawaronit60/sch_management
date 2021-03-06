const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const JWT_SECRET = "THIS-IS-MY-DBMS-MINI-PROJECT"
const JWT_EXPIRES_IN = "10h"
const JWT_COOKIE_EXPIRES_IN = "90d"
const util = require('util')

const signtoken = (id) => {
  return jwt.sign({ id: id },JWT_SECRET)
}
const createSendToken = async (user, statusCode, res) => {

  let token = signtoken(user.id)
  const cookieOptions = {
      expire: new Date(Date.now() + JWT_EXPIRES_IN * 24 * 60 * 60 * 1000),
      secure: false,
      httpOnly: true
  }

  res.cookie('jwt', token, cookieOptions)

  res.status(statusCode).json({
      status: 'success',
      token,
      data: user
  })

}

exports.signup = async (req, res) => {
  try {
     
      let { name,email,  role  , password,status,date_of_birth } = req.body
      let passwordHashed = await bcrypt.hash(password, 10)
      let user = await User.create({
        name,
        email,
        password:passwordHashed,
        status:status.toUpperCase(),
        role,
        date_of_birth
      })
      
      createSendToken(user, 201, res)

  } catch (err) {
      res.status(400).json({
          status: 'fail',
          message: err.message
      })
  }
}

exports.login = async(req,res)=>{
  try {
    let {email , password} = req.body

    if(!email || !password)
    return res.status(400).json({
      status:'fail',
      message:'Please provide email or password'
    })
    
    let user = await User.findOne({where:{email}})
    if(user===null)
    return res.status(400).json({
      message:'no user with this email id'
    })

    let passcomp =await bcrypt.compare(password,user.password)

    if(passcomp===false)
      return res.status(400).json({
        message:'incorrect password'
      })

      createSendToken(user,201,res)

  } catch (err) {
      res.status(400).json({
        status:'fail',
        message:err.message
      })
  }
}

exports.protect = async(req,res,next)=>{
  try {
    
    let token
    
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt
    }


    if (!token)
        return res.status(400).json({
            status: 'Fail',
            message: 'You are not logged in'
        })

       const decoded = await util.promisify(jwt.verify)(token, JWT_SECRET)

       let user = await User.findOne({where:{id:decoded.id}})
       if(!user)
       return res.status(400).json({
         status: 'Fail',
         message: 'No user with this account'
     })
     
      req.user = user
    
      next();

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
  })
  }
}

exports.logout = (req, res) => {

  res.clearCookie('jwt')
  res.status(200).json({
      status: 'success'
  })
}

exports.adminLogin = async(req,res)=>{
  try {

    let {email , password} = req.body

    if(!email || !password)
    return res.status(400).json({
      status:'fail',
      message:'Please provide email or password'
    })
    
    let user = await User.findOne({where:{email}})
    if(user===null)
    return res.status(400).json({
      message:'no user with this email id'
    })

    let passcomp =await bcrypt.compare(password,user.password)

    if(passcomp===false)
      return res.status(400).json({
        message:'incorrect password'
      })
      console.log(user)
        if(user.role!= 'ADMIN'){
          return res.status(400).json({
            status:'fail',
            message:'You are not authorized to access this route!'
          })
        }
        
        createSendToken(user,201,res)

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
  }) 
  }
}