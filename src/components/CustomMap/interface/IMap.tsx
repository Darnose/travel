export default interface IMap {
    data: IData,
}

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
