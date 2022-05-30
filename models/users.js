const {request} = require('../db/request')

const allUsers = async()=>{
    const data = await request('SELECT * FROM users')

    return{
        data
    }
}

const createUser = async(name,lastname,email,password,status)=>{
    const data = await request(
        `INSERT INTO users (name,lastname,email,password,status) VALUES('${name}','${lastname}','${email}','${password}',${status});`
    )
    return{
        id:data.insertId,
        name,
        message:'Usuario creado con éxito'
    }
}

module.exports = {
    allUsers,
    createUser
}