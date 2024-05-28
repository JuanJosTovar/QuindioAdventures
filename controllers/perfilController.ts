import {Request, Response} from 'express'
import UserService from '../services/UserService';


let miPerfil= async(req:Request,res:Response)=>{
    try{
        console.log(333);
        
        const emailUser = req.query.email as string;
        const getMiPerfil = await UserService.verMiPerfil(emailUser);
        return res.status(200).json(
            {status: 'Obtenido correctamente', email: emailUser, pedidos: getMiPerfil}
        );
    } catch (error: any) {
        console.error("Error al ejecutar la consulta:", error);
        return res.status(500).json({
            error: "Error al obtener usuarios"
        });
    }
    }

export default miPerfil;