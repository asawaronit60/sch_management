const {Sequelize,DataTypes} = require('sequelize')
// const sequelize  = new Sequelize("next_tube","root", "admin",{
//     host:"127.0.0.1",
//     dialect:"mysql"
// })

const sequelize  = new Sequelize(process.env.DATABASE,process.env.USER_NAME, process.env.PASSWORD,{
    host:process.env.HOST,
    port:process.env.DATABASE_PORT,
    dialect:"mysql",

    retry: {
        match: [/Deadlock/i],
        max: 3, // Maximum rety 3 times
        backoffBase: 1000, // Initial backoff duration in ms. Default: 100,
        backoffExponent: 1.5, // Exponent to increase backoff each try. Default: 1.1
    },
      
})



module.exports = {sequelize , DataTypes,Sequelize};