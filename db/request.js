const mysql = require('mysql')

const request = (query)=>new Promise((res,rej)=>{
    const connection = mysql.createConnection({
        host:'localhost',
        port:8889,
        user:'root',
        password:'root',
        database:'base_pfinal'
    })
    connection.query(query,(error,data,fields)=>{
        if(error) rej(error)
        connection.end((err)=>{
            if(err) rej(err)
            res(data)
        })
    })
})

module.exports = {
    request
}