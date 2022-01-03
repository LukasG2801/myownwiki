const db = require('../models')
const Role = db.roles

exports.registerNewRole = async(req, res) => {
    try {
        const role = new Role({
            name: req.body.name
        })
        let data = await role.save()

        if (data) {
            return res.status(201)
        }
    } catch (ex) {
        res.status(400).json({ err: ex })
    }
}