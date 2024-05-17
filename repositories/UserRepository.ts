import db from '../config/config-db'
import User from "../Dto/UserDto";

class UserRepository{
    static async add(user:User){
        const sql = 'INSERT INTO usuario(documento, email, password, nombres, apellidos, edad) VALUES (?,?,?,?,?,?)';
        const values = [user.documento,user.email,user.password,user.nombres,user.apellidos,user.edad];
        return db.execute(sql, values);
    }

    static async addTelefonos(user:User){
        const sql = 'INSERT INTO telefono_usuario(documento_usuario,numero_telefono1,numero_telefono2) VALUES (?,?,?)';
        const values = [user.documento,user.telefono,user.telefono2];
        return db.execute(sql,values)
    }

    static async addDirecciones(user:User){
        const sql = 'INSERT INTO direccion_usuario(documento_usuario,direccion_usuario1,direccion_usuario2) VALUES (?,?,?)';
        const values = [user.documento,user.direccion, user.direccion2];
        return db.execute(sql,values)
    }
}

export default UserRepository;