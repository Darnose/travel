import React from "react"

export default interface IForgot {
    emailHandler: React.ChangeEventHandler<HTMLInputElement>,
    resetEmail: React.MouseEventHandler<HTMLButtonElement>,
    email: string,
}