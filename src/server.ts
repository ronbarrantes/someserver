import * as express from 'express'
import { json } from 'body-parser'
import * as morgan from 'morgan'

import products from "./routes/products"
import errorMiddleware from './lib/error-middleware'

const production = false ? 'combined' : 'dev'

const app = express()
const PORT = 3000

// MIDDLEWARE
app.use(json())
app.use(morgan(production))

// routes
app.use(products)

app.get('/', (req, res) => {
  res.send({
    message: `I don't know what this is`
  })
})

app.use(errorMiddleware)

// Register 404 route
app.all('*', (req, res) => res.sendStatus(404));

app.listen(PORT, () => console.log(`Listening ${PORT}`))