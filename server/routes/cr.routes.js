module.exports = server => {
    const axios = require('axios')
    const cr = require('../controller/cr.controller.js')

    let router = require("express").Router()

    router.get("/", async (req, res, next) => {
        console.log("'/test' call");
        try {
            const res = await axios.get("http://corhana78.dclagune.local:8056/sap/opu/odata/sap/J_6M_CREDIT_REQUEST_SRV/CreditRequestSet", {  
            auth: {
              username: 'GIESLER',
              password: 'Hockenheimring2'
            }
          }  
          );
            //   res.json(data);
            return res.data.d.results
        }
        catch (err) {
          next(err)
        }
    })

    server.use('/api/cr', router)
}