import express, { Request, Response } from 'express'
import { product } from '@commerce/core'

const app = express()
const port = 3001

app.get('/products/:id', async (req: Request, res: Response) => {
  console.log(req.body)
  const result = await product.getById('1')
  res.json(result)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
