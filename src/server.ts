import * as express from 'express'
import { json } from 'body-parser'
import * as morgan from 'morgan'
import users from './routes/users'
import items from './routes/items'

const app = express()
const PORT = 3000

// MIDDLEWARE
app.use(json())
app.use(morgan('tiny'))

// routes
app.use(users)
app.use(items)

app.get('/', (req, res) => {
  res.send('world')
})

app.listen(PORT, () => console.log(`Listening ${PORT}`))