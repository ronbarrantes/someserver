import * as express from "express"
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('world')
})

app.listen(PORT, () => console.log(`Listening ${PORT}`))