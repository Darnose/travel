export default interface IAttraction {
  attractions: IAttractions,
  data: IData,
}

export interface IAttractions {
  data: [{
    name: string,
    address_obj: {
      street1: string,
    }
  }]
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
