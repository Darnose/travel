import React from "react";


export default interface ISearch {
    location: string,
    locationHandler: React.ChangeEventHandler<HTMLInputElement>,
    searchLocation: React.MouseEventHandler<HTMLButtonElement>,
    deleteLocation: React.MouseEventHandler<HTMLButtonElement>,
}
