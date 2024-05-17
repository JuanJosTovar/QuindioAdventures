import User from '../Dto/UserDto';
import { Request, Response } from 'express';
import UserService from '../services/UserService';


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