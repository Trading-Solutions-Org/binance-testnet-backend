import express, { Response } from 'express'

import { asyncWrapper } from '../../shared/utils/async-wrapper'
import { binanceClient } from '../../shared/helpers/binance-client'
import { AppError } from '../../shared/utils/errors'
import { RequestWithQuery } from '../../shared/types/core'

import { AccountInfoRequestQuery, AllOrdersRequestQuery, OpenedOrdersRequestQuery } from './types'

const router = express.Router()

router.get(
  '/account',
  asyncWrapper(async (request: RequestWithQuery<AccountInfoRequestQuery>, response: Response) => {
    const { query } = request.query
    const account = await binanceClient.accountInformation(query)

    if (!account) throw new AppError('Binance client failure')
    response.status(200).json(account)
  }),
)

router.get(
  '/allOrders',
  asyncWrapper(async (request: RequestWithQuery<AllOrdersRequestQuery>, response: Response) => {
    const { symbol, ...options } = request.query
    const allOrders = await binanceClient.allOrders(symbol, options)

    if (!allOrders) throw new AppError('Binance client failure')

    response.status(200).json(allOrders)
  }),
)

router.get(
  '/openedOrders',
  asyncWrapper(async (request: RequestWithQuery<OpenedOrdersRequestQuery>, response: Response) => {
    const { query } = request
    const openOrders = await binanceClient.currentOpenOrders(query)

    if (!openOrders) throw new AppError('Binance client failure')
    response.status(200).json(openOrders)
  }),
)

export default router
