const express = require('express')
const router = express.Router()

//controllers
const{allNbooksController,createNbookController} = require('../controllers/nbooksControllers')

router.get('/',allNbooksController)

router.post('/',createNbookController)

module.exports = router
