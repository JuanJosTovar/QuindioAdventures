    import User from "../Dto/UserDto";
    import Auth from "../Dto/AuthDto";
    import generateHash from "../helpers/generateHash";
    import UserRepository from "../repositories/UserRepository";
    import bcrypt from "bcryptjs";

    class UserService {
        static async register(user: User) {
            user.password = await generateHash(user.password);
            return await UserRepository.add(user);
        }

        static async registerTelefonos(user: User) {
            return await UserRepository.addTelefonos(user);
        }

        static async registerDirecciones(user: User) {
            return await UserRepository.addDirecciones(user);
        }

        static async auth(auth: Auth) {
            const result: any = await UserRepository.login(auth);
            if (result[0].length > 0) {
                const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
                console.log(auth.password, result[0][0].password);
                
                if (isPasswordValid) {
                    return { logged: true, status: "Successful Authentication" };
                }
                return { logged: false, status: "Incorrect username or password" };
            }
            return { logged: false, status: "Incorrect username or password" };
        }
    }

    export default UserService;
