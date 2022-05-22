const {Sequelize,DataTypes} = require('sequelize')
// const sequelize  = new Sequelize("next_tube","root", "admin",{
//     host:"127.0.0.1",
//     dialect:"mysql"
// })

const sequelize  = new Sequelize(process.env.DATABASE,process.env.USER, process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:"mysql"
})



module.exports = {sequelize , DataTypes};