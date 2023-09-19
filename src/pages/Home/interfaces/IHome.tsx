import React from "react";

export interface IData {
  name: string,
  coord: {
    lon:number
    lat:number
  }
  weather: [{
    main: string,
  }]
  main: {
    temp: number,
    feels_like: number,
    humidity: number,
  }
  wind: {
    speed: number,
  }
}

export default interface IHome {
    data: IData,
    location: string,
    loading: boolean,
    locationHandler: React.ChangeEventHandler<HTMLInputElement>,
    searchLocation: React.MouseEventHandler<HTMLButtonElement>,
    deleteLocation: React.MouseEventHandler<HTMLButtonElement>,
}

