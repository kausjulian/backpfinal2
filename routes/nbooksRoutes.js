const express = require('express')
const router = express.Router()

//controllers
const{allNbooksController,createNbookController,deleteNbookController} = require('../controllers/nbooksControllers')

router.get('/',allNbooksController)

// router.post('/',createNbookController)

router.delete('/:id',deleteNbookController)

//multer
const multer = require('multer')
const upload = multer({dest:'imagenes/'})

router.post('/',upload.single('image'),createNbookController)

module.exports = router
