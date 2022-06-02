const {allNbooks,createNbook} = require('../models/nbooks')

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
    try {
        const nbook = await createNbook(archivo, marca, modelo, precio, ano, descripcion, stock)
        return res.send(nbook)
    } catch (err) {
       return res.send('Se produjo un error')
    }

}

module.exports = {
    allNbooksController,
    createNbookController
}