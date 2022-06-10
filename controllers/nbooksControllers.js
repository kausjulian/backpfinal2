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
    const {archivo, marca, modelo, precio, ano, descripcion, stock} = req.body
    // console.log(archivo, marca, modelo, precio, ano, descripcion, stock)
    try {
        const nbook = await createNbook(archivo, marca, modelo, precio, ano, descripcion, stock)
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