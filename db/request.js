require("dotenv").config();
const mysql = require('mysql')

const request = (query)=>new Promise((res,rej)=>{
    const connection = mysql.createConnection({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.DB_DATABASE
        
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


