import axios from 'axios'
import { telegramClientConfig } from '../helpers/telegram-client-config'

export const sendTelegramMessage = async (text: string) => {
  const { TELEGRAM_API, TELEGRAM_CHAT_ID } = telegramClientConfig

  const telegramApiUrl = `${TELEGRAM_API}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&parse_mode=HTML&text=${text}`
  console.log(telegramApiUrl)
  await axios.get(telegramApiUrl)
}
