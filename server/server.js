const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config/db.config')

const server = express();

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

const db = require('./models')
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database')
}).catch(err => {
    console.log(err)
    process.exit
})

server.get("/", (req, res) => {
    res.json({ message: 'Server running' })
    console.log('All services connected')
})

require('./routes/users.routes')(server)
require('./routes/role.routes')(server)
require('./routes/class.routes')(server)

const PORT = 4000
server.listen(PORT, () => {
    console.log('Server listening at port 4000');
})