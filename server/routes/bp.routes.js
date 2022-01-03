module.exports = server => {
    const axios = require('axios')

    let router = require("express").Router()

    router.get("/", async (req, res) => {
        oResults = await axios.get("http://corhana78.dclagune.local:8056/sap/opu/odata/sap/Z_R4CM_VUE_SRV/VH_BusinessPartnerSet", {
          auth: {
            username: 'GIESLER',
            password: 'Hockenheimring2'
          }
        })

        res.json(oResults.data.d.results)
    })

    server.use('/api/bp', router)
}