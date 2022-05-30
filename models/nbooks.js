const{request} = require('../db/request')

const allNbooks = async()=>{
    const data = await request('SELECT * FROM books')

    return{
        data
    }

}

const createNbook = async(nombre,precio,stock,descripcion,imagen)=>{
    const data = await request(`
    INSERT INTO books (nombre,precio,stock,descripcion,imagen)
    VALUES(${nombre},${precio},${stock},${descripcion},${imagen});`
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

