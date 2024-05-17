class User{
    private _documento: string;
    private _email: string;
    private _nombres: string;
    private _apellidos: string;
    private _edad: number;
    private _telefono : string;
    private _telefono2 : string;
    private _direccion : string;
    private _direccion2 : string;
    private _password: string;

    constructor(
        documento:string, email:string, nombres:string,
        apellidos:string, edad: number, telefono:string,
        telefono2:string, direccion: string, direccion2: string,
        password:string
    ){
        this._documento = documento;
        this._email = email;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._edad = edad;
        this._telefono = telefono;
        this._telefono2 = telefono2;
        this._direccion = direccion;
        this._direccion2 = direccion2;
        this._password = password;
    }

    //Getters
    get documento(): string{
        return this._documento
    }

    get email(): string{
        return this._email
    }

    get nombres(): string{
        return this._nombres
    }

    get apellidos(): string{
        return this._apellidos
    }

    get edad(): number{
        return this._edad
    }

    get telefono(): string{
        return this._telefono
    }

    get telefono2(): string{
        return this._telefono2
    }

    get direccion(): string{
        return this._direccion
    }

    get direccion2(): string{
        return this._direccion2
    }

    get password(): string{
        return this._password
    }

    //Setters
    set documento(documento:string){
        this._documento = documento
    }

    set email(email:string){
        this._email = email;
    }

    set nombres(nombres:string){
        this._nombres = nombres
    }

    set apellidos(apellidos:string){
        this._apellidos = apellidos
    }
    
    set edad(edad:number){
        this._edad = edad
    }

    set telefono(telefono:string){
        this._telefono = telefono
    }

    set telefono2(telefono2:string){
        this._telefono2 = telefono2
    }

    set direccion(direccion:string){
        this._direccion = direccion
    }

    set direccion2(direccion2:string){
        this._direccion2 = direccion2
    }
    
    set password(password:string){
        this._password = password
    }
}

export default User