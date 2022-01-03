const db = require('../models')
const User = db.users

exports.registerNewUser = async(req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        })
        let data = await user.save()
        const token = await user.generateAuthToken()
        console.log("test")
        res.status(201).json({ data, token })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}

exports.loginUser = async(req, res) => {
    console.log("test login")
    try {
        const email = req.body.email
        const password = req.body.password
        const user = await User.findByCredentials(email, password)
        console.log(user)
        if (!user) {
            return res.status(401).json({ error: "Login failed! Check authentication credentials" })
        }
        const token = await user.generateAuthToken()
        res.status(201).json({ user, token })
    } catch (err) {
        res.status(400).json({ err: err })
    }
}

exports.getUserDetails = async(req, res) => {
    console.log("test")
    await res.json(req.userData)
}

exports.create = (req, res) => {
    console.log("User create")
    if (!req.body.email) {
        res.status(400).send({ message: 'Fill email' })
        return
    }

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    })

    user.save(user).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occured while creating the user'
        })
    })
}

exports.findAll = (req, res) => {
    const firstname = req.query.firstname
    let condition = firstname ? { firstname: { $regex: new RegExp(firstname), $options: "i" } } : {}

    User.find(condition).then(data => {
        res.send(JSON.stringify(data))
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while retrieving all users"
        })
    })
}

exports.findOneByMail = (req, res) => {
    let sEmail = req.params.email
    let sPassword = req.params.password
    console.log(sEmail, sPassword)
    User.findOne({ email: sEmail, password: sPassword }).then(data => {
        console.log(data)
        res.send(data)
    })
}