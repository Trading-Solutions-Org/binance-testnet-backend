import express, { Request, Response } from 'express'
import axios from 'axios'
import { asyncWrapper } from '../../shared/utils/async-wrapper'

const router = express.Router()
const TELEGRAM_TOKEN = '6941688271:AAH6QpVwM1UKhWafv5tUtYx8D8zflaU8s0E'
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`
const TELEGRAM_CHAT_ID = '537057649'

router.post(
  '/alert',
  asyncWrapper(async (request: Request, response: Response) => {
    // const { message } = request.body
    // const url = `${TELEGRAM_API}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${message}`
    // await axios.get(url)
    console.log(request.body)

    response.status(200).json({ data: 'OK' })
  }),
)

export default router
