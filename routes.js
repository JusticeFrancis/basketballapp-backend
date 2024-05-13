const express = require("express");
const bodyParser = require('body-parser');

const controller = require('./controller')


const router = express.Router()



//parsing form data successfully
router.use(express.json({limit: '50mb'})) // for parsing application/json
router.use(express.urlencoded({ limit: '50mb',extended: true})) // for parsing application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ limit: '50mb',extended: true }));



router.get('/',(req,res)=> {
    res.send('Backend online')
})

//controller
router.post('/upload-score', controller.uploadScore)
router.get('/get-scores', controller.getScores)
router.get('/delete-scores', controller.deleteScores)

module.exports = router;



