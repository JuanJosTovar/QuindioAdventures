import {Request, Response} from 'express'
import Auth from '../Dto/AuthDto';
import {generateToken} from '../helpers/generateToken'
import UserService from '../services/UserService';
let auth = async(req:Request, res:Response) =>{
    try {
        const {email, password} = req.body;
        const login = await UserService.auth(new Auth(email, password));
            if(login.logged){
                return res.status(200).json({
                    status: login.status,
                    token:  await generateToken(email)
                });
            }   
        
        return res.status(401).json({ 
            status: 'Incorrect username or password'
        });
    } catch (error) {
        console.log(error);
    }
}

export default auth;