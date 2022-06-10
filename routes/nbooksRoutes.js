const express = require('express')
const router = express.Router()

//controllers
const{allNbooksController,createNbookController,deleteNbookController} = require('../controllers/nbooksControllers')

router.get('/',allNbooksController)

router.post('/',createNbookController)

router.delete('/:id',deleteNbookController)

module.exports = router
