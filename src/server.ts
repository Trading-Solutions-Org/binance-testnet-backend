import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import binanceRouter from './controllers/binance/binance-controller'
import { AppError } from './shared/utils/errors'

const app: Application = express()
const PORT = process.env.PORT || 8090

const originsCors = ['http://localhost:4000']

app.use(cors({ origin: originsCors }))
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/binance', binanceRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

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
