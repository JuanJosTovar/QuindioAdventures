import User from '../Dto/UserDto';
import { Request, Response } from 'express';
import UserService from '../services/UserService';
import transporter from '../config/mailer';


let register = async(req: Request, res: Response) =>{
    try{
        const{
            documento,
            email,
            password,
            nombres,
            apellidos,
            edad,
            telefono,
            telefono2,
            direccion,
            direccion2
        } = req.body;
        
let user: User = new User(documento,email, nombres, apellidos, edad, telefono, telefono2, direccion, direccion2, password);
const registerUser = await UserService.register(user);
const registerTelefonos = await UserService.registerTelefonos(user);
const registerdirecciones = await UserService.registerdirecciones(user);

async function mailer() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Autenticacion exitosa 👻" <camilobalsero16@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Registro exitoso ✔", // Subject line
        text: `Hola ${nombres}, bienvenido a nuestro servicio!`, // plain text body
        html: `Hola ${nombres}, Bienvenido a nuestro serviciosssssssssssssssssss de QuindioAdventures`, // html body
      });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  
  mailer().catch(console.error);

return res.status(201).send(
    {status: 'Registrado con exito'}
);
    }catch(error: any){
        if(error && error.code == 'ER_DUP_ENTRY'){
            return res.status(500).send({errorInfo: error.sqlMessage}
            );
        }
    }
}

export default register