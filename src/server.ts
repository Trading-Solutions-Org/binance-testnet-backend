import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import binanceRouter from './controllers/binance/binance-controller'
import tradingViewRouter from './controllers/trading-view/trading-view-controller'
import { AppError } from './shared/utils/errors'

const app: Application = express()
const PORT = process.env.PORT || 8090

const originsCors = [
  'http://localhost:4000',
  'https://52.89.214.238',
  'https://34.212.75.30',
  'https://54.218.53.128',
  'https://52.32.178.7',
]

app.use(cors({ origin: originsCors }))
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/binance', binanceRouter)
app.use('/api/trading-view', tradingViewRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

// eslint-disable-next-line consistent-return
app.use((request, response) => {
  if (request instanceof AppError) {
    return response.status(request.status).json({ message: request.message })
  }
  response.status(500).json({ message: request })
})

const start = async () => {
  try {
    app.listen(PORT)
    console.log(`Server is running on port ${PORT}!`)
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`)
  }
}

start()
