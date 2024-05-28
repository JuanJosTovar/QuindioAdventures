import express from "express"
import bodyParser from "body-parser"
import register from './routes/register'
import auth from './routes/auth'
import perfil from './routes/perfil'
import reestablecer from "./routes/reestablecer"

const app = express().use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

app.use('/register', register);
app.use('/auth', auth);
app.use('/perfil', perfil)
app.use('/reestablecer', reestablecer)

const PORT = process.env.PORT || 10101;

app.listen(PORT, () =>{
    console.log("Servidor ejecutandose en el puerto: ", PORT)
}).on("error", (error) =>{
    throw new Error(error.message);
})