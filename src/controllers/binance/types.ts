import { Request } from 'express'

export interface AccountInfoRequestQuery extends Request {
  recvWindow?: number
}

export interface AllOrdersRequestQuery extends Request {
  symbol: string
  orderId?: number
  startTime?: number
  endTime?: number
  limit?: number
  recvWindow?: number
}

export interface OpenedOrdersRequestQuery extends Request {
  symbol?: string
  recvWindow?: number
}
