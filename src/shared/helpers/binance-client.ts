import { Spot } from '@binance/connector-typescript'

export const binanceClient = new Spot(
  process.env.BINANCE_API_KEY,
  process.env.BINANCE_API_KEY_SECRET,
  { baseURL: process.env.BINANCE_API_BASE_URL },
)
