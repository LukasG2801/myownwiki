const db = require('../models')
const Class = db.classes

exports.registerNewClass = async(req, res) => {
    try {
        const oClass = new Class({
            name: req.body.name,
            object: req.body.object,
            extensions: req.body.extensions,
            heading: req.body.heading,
            description: req.body.description
        })

        let data = await oClass.save()
        res.status(201).json({ data })
    } catch (ex) {
        res.status(400)
    }
}

exports.findAll = async(req, res) => {
    let oData = await Class.find()
    res.send(JSON.stringify(oData))
}