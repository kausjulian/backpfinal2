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
    const data = await request(`SELECT * FROM users WHERE email = '${email}'`)
    
    if(data.length === 0 ){
        return 'Usuario no registrado'
    } 
    if(bcrypt.compareSync(password, data[0].password)){
        console.log('entra compare')
        return data[0]
    }
    else{
        console.log('entra else')
    return {
            msg:'Usuario o contraseña incorrecto',
            error:true
        }
    }
            
    
}



module.exports = {
    register,
    login
}




  
// if(data.length && comparePassword(password,data[0].password)){
//     delete data[0].password
//     return data[0]
// }
// else{
//     return{
//         message:'Usuario o contraseña incorrectos'
//     }
// }







//     console.log(password)
//     const match = await bcrypt.compare(password, data[0].password);
//     console.log(match)

//     if(data.length === 0 ){
//         return {
//             msg:'Usuario no registrado',
//             error:true
//         }} 
//     else{
//     if(match){
//         return data[0]
//     }
//     else{
//         return {
//             msg:'Usuario o contraseña incorrecto',
//             error:true
//         }
//     }
// }