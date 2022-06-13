const{request} = require('../db/request')

const allNbooks = async()=>{
    const data = await request('SELECT * FROM nbooks')

    return data
}

const createNbook = async(archivo, marca, modelo, precio, ano, descripcion, stock)=>{
    const data = await request(`INSERT INTO nbooks (archivo, marca, modelo, precio, ano, descripcion, stock) VALUES ('${archivo}','${marca}','${modelo}',${precio},${ano},'${descripcion}',${stock})`)
return{
   id:data.insertId,
   archivo
}
}

const deleteNbook = async(id)=>{
    const data = await request(`DELETE FROM nbooks WHERE id = ${id}`)
    return{
        id,
        deleted:data.affectedRows ? true: false
    }

}

module.exports = {
    allNbooks,
    createNbook,
    deleteNbook
}

