const express = require('express')
const router = express.Router()

//controllers
const {allUserscontroller,createUserController} = require('../controllers/usersControllers')

//get all users
router.get('/',allUserscontroller)
//create user
router.post('/',createUserController)

module.exports = router

