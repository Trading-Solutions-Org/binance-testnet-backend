import * as process from 'process'

export const telegramClientConfig = Object.freeze({
  TELEGRAM_API: `${process.env.TELEGRAM_API_BASE_URL}${process.env.TELEGRAM_TOKEN}`,
  TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
})
