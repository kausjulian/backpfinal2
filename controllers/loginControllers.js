const bcrypt = require('bcrypt')
const {register, login} = require('../models/login')

const registerController = async (req,res) =>{
    let {name,lastname,email, password,status,type} = req.body
    password = await bcrypt.hash(password,10);

    try {
        const user = await register(name,lastname,email, password,status,type)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send('Error en el registro')
    }
}

const loginController = async(req,res)=>{
    let{email,password} = req.body
    console.log(password)
    try {
        const user = await login(email,password)
        return res.status(201).send(user).cookie('session',user)
    } catch (error) {
        return res.status(500).send('Error en la autenticación')
    }


}

module.exports = {
    registerController,
    loginController
}