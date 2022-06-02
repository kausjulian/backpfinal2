const{request} = require('../db/request')

const allNbooks = async()=>{
    const data = await request('SELECT * FROM nbooks')

    return{
        data
    }

}

const createNbook = async(archivo, marca, modelo, precio, ano, descripcion, stock)=>{
    const data = await request(`
    INSERT INTO books (archivo, marca, modelo, precio, ano, descripcion, stock)
    VALUES('${archivo}','${marca}','${modelo}',${precio},${ano},'${descripcion}',${stock});`
)
return{
   id:data.insertId,
   nombre
}
}

module.exports = {
    allNbooks,
    createNbook
}

