module.exports = server => {
    const roles = require('../controller/role.controller')

    let router = require("express").Router()

    router.post("/register", roles.registerNewRole)

    server.use('/roles', router)
}