const dbConfig = require('../config/db.config')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url

db.users = require('./user.model.js')(mongoose)
db.roles = require('./role.model')(mongoose)
db.classes = require('./Classes.model')(mongoose)

module.exports = db