const {allUsers,createUser} = require('../models/users')

const allUserscontroller = async(req,res)=>{
    try {
        const users = await allUsers()
        return res.send(users)
    } catch (err) {
        return res.send('Se produjo un error')
    }
}

const createUserController = async(req,res)=>{
    const{name,lastname,email,password,status,type} = req.body
    try {
        const user = await createUser(name,lastname,email,password,status,type)
        return res.send(user)    
    } catch (err) {
        console.log(err)
        return res.send('Se produjo un error')
    }
}

module.exports={
    allUserscontroller,
    createUserController
}