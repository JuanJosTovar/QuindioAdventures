import db from '../config/config-db';
import User from "../Dto/UserDto";
import Auth from '../Dto/AuthDto';

class UserRepository {
    static async perfilUsuario(email: String) {
        const sql = 'SELECT * FROM usuario WHERE email = ? ';
        const values = [email];
        return db.execute(sql, values);
    }
    static async add(user: User) {
        const sql = 'INSERT INTO usuario(documento, email, password, nombres, apellidos, edad) VALUES (?,?,?,?,?,?)';
        const values = [user.documento, user.email, user.password, user.nombres, user.apellidos, user.edad];
        return db.execute(sql, values);
    }

    static async addTelefonos(user: User) {
        const telefono1 = user.telefono || null;
        const telefono2 = user.telefono2 || null;
        if (telefono1 || telefono2) {
            const sql = 'INSERT INTO telefonoUsuario(documento_usuario, numero_telefono1, numero_telefono2) VALUES (?,?,?)';
            const values = [user.documento, telefono1, telefono2];
            return db.execute(sql, values);
        }
    }

    static async addDirecciones(user: User) {
        const direccion1 = user.direccion || null;
        const direccion2 = user.direccion2 || null;
        if (direccion1 || direccion2) {
            const sql = 'INSERT INTO direccionUsuario(documento_usuario, direccion_usuario1, direccion_usuario2) VALUES (?,?,?)';
            const values = [user.documento, direccion1, direccion2];
            return db.execute(sql, values);
        }
    }

    static async login(auth: Auth){
        const sql = 'SELECT password FROM usuario WHERE email=?';
        const values = [auth.email];
        return db.execute(sql, values);
    }

    static async resetPassword(email: string, newPasswordHash: string) {
        const sql = 'UPDATE usuario SET password = ? WHERE email = ?';
        const values = [newPasswordHash, email];
        return db.execute(sql, values);
    }

}

export default UserRepository;
