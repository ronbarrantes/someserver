import * as express from 'express'
import { json } from 'body-parser'
import * as morgan from 'morgan'

import products from "./routes/products"

const app = express()
const PORT = 3000

// MIDDLEWARE
app.use(json())
app.use(morgan('tiny'))

// routes
app.use(products)

app.get('/', (req, res) => {
  res.send(`I don't know what I'm doing`)
})

// Register 404 route
app.all('*', (req, res) => res.sendStatus(404));

app.listen(PORT, () => console.log(`Listening ${PORT}`))