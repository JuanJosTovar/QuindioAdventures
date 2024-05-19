import db from '../config/config-db';
import User from "../Dto/UserDto";

class UserRepository {
    static async add(user: User) {
        const sql = 'INSERT INTO usuario(documento, email, password, nombres, apellidos, edad) VALUES (?,?,?,?,?,?)';
        const values = [user.documento, user.email, user.password, user.nombres, user.apellidos, user.edad];
        return db.execute(sql, values);
    }

    static async addTelefonos(user: User) {
        // Asegurarse de pasar null en lugar de undefined
        const telefono1 = user.telefono || null;
        const telefono2 = user.telefono2 || null;
        if (telefono1 || telefono2) {
            const sql = 'INSERT INTO telefonoUsuario(documento_usuario, numero_telefono1, numero_telefono2) VALUES (?,?,?)';
            const values = [user.documento, telefono1, telefono2];
            return db.execute(sql, values);
        }
    }

    static async addDirecciones(user: User) {
        // Asegurarse de pasar null en lugar de undefined
        const direccion1 = user.direccion || null;
        const direccion2 = user.direccion2 || null;
        if (direccion1 || direccion2) {
            const sql = 'INSERT INTO direccionUsuario(documento_usuario, direccion_usuario1, direccion_usuario2) VALUES (?,?,?)';
            const values = [user.documento, direccion1, direccion2];
            return db.execute(sql, values);
        }
    }
}

export default UserRepository;
