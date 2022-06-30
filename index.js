//dotenv
require("dotenv").config();

const express = require('express')
const app = express()
const cors = require('cors');
const usersRoutes = require('./routes/usersRoutes')
const nbooksRoutes = require('./routes/nbooksRoutes')
const loginRouter = require('./routes/loginRoutes')
const multer = require('multer');
const cookieParser = require("cookie-parser");
const nodemailer = require('nodemailer');


//config puerto
const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`Server Runing in port ${PORT}`);
})
    
    //para poder mandar json en el body de la request
app.use(express.json());
app.use(cors());
///
app.get('/',(req,res)=>{
    res.send('Directorio Principal')
});

//routing hacia users
app.use('/users',usersRoutes)
//routing hacia notebooks
app.use('/notebooks',nbooksRoutes)
app.use('/login',loginRouter)
//
//cookie parser//
app.use(cookieParser())
//nodemailer
app.post('/sendmail',(req,res)=>{
    const{data} = req.body
    
    
    let transporter = nodemailer.createTransport({
        host:'smtp.ethereal.email',
        port:587,
        secure:false,
        auth:{
            user:"billy.bauch52@ethereal.email",
            pass:"DUSdcvmgsCtXhgN5Fp",
        }
    
    })
    
    let mailOptions = {
        from:'billy.bauch52@ethereal.email',
        to:data.email,
        subject:'Confirmación de compra Tech Center',
        html:'<h1 class="text-center" style="color: rgb(30, 144, 252)">Tech Center</h1><p> Gracias por tu compra en Tech Center! En breve nos pondremos en contacto con vos para indicarte los pasos a seguir</p>'
    }
    
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            res.status(500).send(error.message)
        }else{
            res.status(200).jsonp(req.body)
            
            // .send(info.response)
        }
        
    })
    
    console.log('Email enviado')
})


