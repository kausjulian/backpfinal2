const fs = require('fs')
const {allNbooks,createNbook, deleteNbook} = require('../models/nbooks')

const allNbooksController = async(req,res)=>{
    try {
        const nbooks = await allNbooks()
        return res.send(nbooks)
    } catch (err) {
        return res.send('Se produjo un error')
    }
}

const createNbookController = async(req,res)=>{
    const {nomarchivo,marca, modelo, precio, ano, descripcion, stock} = req.body
    
    // const ext = req.file.mimetype.split('/',2)[1];
    // const archivo = `${nomarchivo}.${ext}`
    ///en esta linea de abajo no entendi bien lo que hago, tampoco como funca el split
    // fs.renameSync(req.file.path,`imagenes/${archivo}`)
    // console.log(req.file)



    try {
        const nbook = await createNbook(nomarchivo, marca, modelo, precio, ano, descripcion, stock)
        return res.send(nbook)
    } catch (err) {
        console.log(err)
        return res.send('Se produjo un error')
    }

}

const deleteNbookController = async(req,res)=>{
    const{id} = req.params
    console.log(id)
    try {
        const deleteNotebook = await deleteNbook(id)
        return res.send(deleteNotebook)
    } catch (err) {
        console.log(err)
        return res.send('Se produjo un error')
    }
}



module.exports = {
    allNbooksController,
    createNbookController,
    deleteNbookController
}