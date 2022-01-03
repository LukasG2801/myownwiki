module.exports = server => {
    const classes = require('../controller/class.controller')

    let router = require("express").Router()

    router.post("/register", classes.registerNewClass)
    router.get("/", classes.findAll)

    server.use("/classes", router)
}