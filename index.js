const express = require('express')
const app = express()
const usersRoutes = require('./routes/usersRoutes')
const nbooksRoutes = require('./routes/nbooksRoutes')
const loginRouter = require('./routes/loginRoutes')
//dotenv
require("dotenv").config();

//config puerto
const PORT = process.env.PORT

const cors = require('cors')

app.listen(PORT,()=>{
    console.log(`Server Runing in port ${PORT}`);
})

//para poder mandar json en el body de la request
app.use(express.json())
app.use(cors())
///
app.get('/',(req,res)=>{
    res.send('Directorio Principal')
});

//routing hacia users
app.use('/users',usersRoutes)
//routing hacia notebooks
app.use('/notebooks',nbooksRoutes)
app.use('./login',loginRouter)


