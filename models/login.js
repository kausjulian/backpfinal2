const bcrypt = require('bcrypt')
const{request} = require('../db/request')

const register = async (name,lastname,email, password,status,type) =>{
    const data = await request(`SELECT * FROM users WHERE email = '${email}'`)
    if(data.length >0){
        return 'El usuario ya existe'
    }else{
        const user = await request(`INSERT INTO users (name,lastname,email, password,status,type) VALUES('${name}','${lastname}','${email}','${password}',${status},'${type}')`)
        return {
        id:user.insertId,
        email
        }

    }
    
}

const login = async ( email,password )=> {
    const data = await request(`SELECT * FROM users WHERE email = '${email}`)
    if(data.length === 0 ){
        return 'Usuario no registrado'
    } else{
        if(bcrypt.compareSync(password,data[0].password)) {
            return data[0]
        }else{
            return 'Usuario o contraseña incorrecto'
        }
    }

}



module.exports = {
    register,
    login
}