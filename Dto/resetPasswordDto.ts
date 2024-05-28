class ResetPasswordDto {
    private _email: string;
    private _newPassword: string;
    private _confirmPassword: string;

    constructor(email: string, newPassword: string, confirmPassword: string) {
        this._email = email;
        this._newPassword = newPassword;
        this._confirmPassword = confirmPassword;
    }

    // Getters
    get email(): string {
        return this._email;
    }

    get newPassword(): string {
        return this._newPassword;
    }

    get confirmPassword(): string {
        return this._confirmPassword;
    }

    // Setters
    set email(email: string) {
        this._email = email;
    }

    set newPassword(newPassword: string) {
        this._newPassword = newPassword;
    }

    set confirmPassword(confirmPassword: string) {
        this._confirmPassword = confirmPassword;
    }
}

export default ResetPasswordDto;
