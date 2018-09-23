const express = require('express')

const router = express.Router()

const app = express()
router.use((req, res, next) => {
    console.log("Inside router use")
    Object.setPrototypeOf(req, app.request)
    Object.setPrototypeOf(res, app.response)
    req.res = res
    res.req = req
    next()
})  

router.post('/track-data', (req, res) => {
    console.log('Stored data!', JSON.stringify(req.body))
    res.status(200).json({ message: "Success!" })
})

module.exports = {
    path: '/api',
    handler: router
}

