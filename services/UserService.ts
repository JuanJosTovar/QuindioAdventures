import User from "../Dto/UserDto";
import generateHash from "../helpers/generateHash";
import UserRepository from "../repositories/UserRepository";
const bcrypt = require("bcryptjs");

class UserService {
    static async register(user:User){
        user.password = await generateHash(user.password);
        return await UserRepository.add(user);
    }

    static async registerTelefonos(user : User){
        return await UserRepository.addTelefonos(user);
    }

    static async registerdirecciones(user : User){
        return await UserRepository.addDirecciones(user);
    }
}

export default UserService;