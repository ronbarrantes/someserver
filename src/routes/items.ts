import { Router } from "express"
const items = Router()


items.post(`/items`, (req, res) => {
  /// TODO: add dynamo to this bitch
  res.send({
    message: 'item posted'
  })
})

items.get(`/items`, (req, res) => {
  res.send([
    {
      id: "39dkknk",
      name: 'book',
      value: 20,
      count: 3,
    }, 
    {
      id: "645ffas",
      name: 'pencil',
      value: 5,
      count: 10,
    }
  ])
})

items.get('/items/:id', (req, res) => {
  res.send(
    { item: req.params.id }
  )
})



export default items