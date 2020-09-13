import { Router } from "express"
const users = Router()

users.get(`/user`, (req, res) => {
  res.send({
    users: {
      message: 'Hello user'
    }
  })
})

export default users