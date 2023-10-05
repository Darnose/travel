import React from "react";

export interface IData {
  name: string,
  coord: {
    lon:number
    lat:number
  }
  weather: [{
    description: string,
  }]
  main: {
    temp: number,
    feels_like: number,
    humidity: number,
  }
  wind: {
    speed: number,
  }
  sys: {
    country: string,
  }
}

export interface IRates {
  base: string,
  rates: {
    keys: number,
  }
}

export default interface IHome {
    data: IData,
    exchangeRates: IRates,
    location: string,
    loading: boolean,
    locationHandler: React.ChangeEventHandler<HTMLInputElement>,
    searchLocation: React.MouseEventHandler<HTMLButtonElement>,
    deleteLocation: React.MouseEventHandler<HTMLButtonElement>,
}