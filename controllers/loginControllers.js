const bcrypt = require('bcrypt')
const {register, login} = require('../models/login')

const registerController = async (req,res) =>{
    let {email,password} = req.body
    password = bcrypt.hashSync(password,10)

    try {
        const user = await register(email,password)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send('Error en el registro')
    }
}

const loginController = async(req,res)=>{
    let{email,password} = req.body
    try {
        const user = await login(email,password)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send('Error en el registro')
    }


}

module.exports = {
    registerController,
    loginController
}