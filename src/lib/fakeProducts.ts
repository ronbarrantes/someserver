import * as faker from 'faker'
import { nanoid } from 'nanoid'
import { randomNumber } from './utils'

const fakeProduct = () => ({
  id: nanoid(6),
  name: faker.commerce.productName(),
  price: faker.commerce.price(3, 50, 2),
  quantity: randomNumber(10),
})


fakeProduct() //?