module.exports = server => {
    const users = require('../controller/user.controller.js')
    const auth = require('../config/auth')

    let router = require("express").Router()

    //routes with auth tokens
    router.post("/register", users.registerNewUser) //register a new User with token 
    router.post("/login", users.loginUser)  //login via auth token 
    router.get("/me", auth, users.getUserDetails)
    //no concerns to tokens
    router.post("/", users.create)
    router.get("/", users.findAll)
    router.get("/user/:email/:password", users.findOneByMail)

    server.use('/users', router)
}