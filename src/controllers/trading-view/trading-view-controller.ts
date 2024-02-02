import express, { Request, Response } from 'express'
import { asyncWrapper } from '../../shared/utils/async-wrapper'
import { AlertRequest } from './type'
import { sendTelegramMessage } from '../../shared/utils/send-telegram-message'

const router = express.Router()

router.post(
  '/alert',
  asyncWrapper(async (request: Request<{}, {}, AlertRequest>, response: Response) => {
    const { type, ticker, price } = request.body

    const message = JSON.stringify({ type, ticker, price })
    const text = `<pre>${message}</pre>`
    await sendTelegramMessage(text)

    response.status(200).json({ message })
  }),
)

export default router
