import React from "react";

export default interface IInput {
    title?: string;
    value?: string;
    type: string;
    placeholder:string;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
}
