import express from 'express'

const router = express.Router()

router.get('/alert', (request) => {
  console.log(request.body)
})

export default router
