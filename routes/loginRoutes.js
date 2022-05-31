const express = require('express')
const router = express.Router()
const {registerController, loginController} = require('../controllers/loginControllers')

router.post('./register',registerController)
router.post('/',loginController)

module.exports = router

