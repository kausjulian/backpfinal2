const mysql = require('mysql')

const request = (query)=>new Promise((res,rej)=>{
    const connection = mysql.createConnection({
        host:'us-cdbr-east-05.cleardb.net',
        user:'ba49cdc6184c5e',
        password:'238af277',
        database:'heroku_0d9b0e76c58ea75'
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


// host:'localhost',
// port:8889,
// user:'root',
// password:'root',
// database:'base_pfinal'