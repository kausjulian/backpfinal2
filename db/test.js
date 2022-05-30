const {request} = require('./request')

request('SELECT * FROM users')
.then(data=> console.log(data))
.catch(err=>console.log(err))