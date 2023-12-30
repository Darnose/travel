export default interface ICurrency {
  exchangeRates: IRates,
}

export interface IRates {
  base: string,
  rates: {
    keys: number,
  }
}
