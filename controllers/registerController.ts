import User from '../Dto/UserDto';
import { Request, Response } from 'express';
import UserService from '../services/UserService';
import transporter from '../config/mailer';

let register = async (req: Request, res: Response) => {
    try {
        const {
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

        // Validar que al menos un teléfono y una dirección sean proporcionados
        if ((!telefono && !telefono2) || (!direccion && !direccion2)) {
            return res.status(400).send({ error: 'Debe proporcionar al menos un teléfono y una dirección.' });
        }

        let user: User = new User(documento, email, nombres, apellidos, edad, telefono || null, telefono2 || null, direccion || null, direccion2 || null, password);

        // Registrar el usuario
        await UserService.register(user);

        // Registrar teléfonos si se proporcionaron
        if (telefono || telefono2) {
            await UserService.registerTelefonos(user);
        }

        // Registrar direcciones si se proporcionaron
        if (direccion || direccion2) {
            await UserService.registerDirecciones(user);
        }

        // Enviar correo de confirmación
        async function mailer() {
            // send mail with defined transport object
            const info = await transporter.sendMail({
                from: '"Autenticación exitosa 👻" <camilobalsero16@gmail.com>', // sender address
                to: email, // list of receivers
                subject: "Registro exitoso ✔", // Subject line
                text: `Hola ${nombres}, bienvenido a nuestro servicio!`, // plain text body
                html: `Hola ${nombres}, Bienvenido a nuestros servicios de QuindioAdventures`, // html body
            });
        
            console.log("Message sent: %s", info.messageId);
            // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
        }

        mailer().catch(console.error);

        return res.status(201).send({ status: 'Registrado con éxito' });
    } catch (error: any) {
        console.error('Error en el servidor:', error); // Agregar registro de errores para depuración
        if (error && error.code === 'ER_DUP_ENTRY') {
            return res.status(500).send({ errorInfo: error.sqlMessage });
        }
        return res.status(500).send({ error: 'Error en el servidor', details: error.message });
    }
}

export default register;
