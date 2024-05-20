class Auth{
    private _email : string;
    private _password: string;

    constructor(
        email: string, password:string
    ){

    this._email = email;
    this._password = password
    }
    //getters
    get email(){
        return this._email
    }

    get password(){
        return this._password
    }

    //setters
    set email(email:string){
        this._email = email
    }

    set password(password: string){
        this._password = password
    }

    
}
export default Auth