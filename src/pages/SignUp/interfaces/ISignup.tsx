import React from "react"

export default interface ISignup {
    emailHandler: React.ChangeEventHandler<HTMLInputElement>,
    passwordHandler: React.ChangeEventHandler<HTMLInputElement>,
    showPassword: boolean,
    Handleshow: React.MouseEventHandler<HTMLButtonElement>,
    validHandler: React.MouseEventHandler<HTMLButtonElement>,
    email: string,
    password: string,
    emailValid: boolean,
    passwordValid: boolean,
    formValid: boolean
}

