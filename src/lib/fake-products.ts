import * as faker from 'faker'
import { nanoid } from 'nanoid'
import { randomNumber } from './utils'

export interface FakeProduct {
  id?: string;
  name: string;
  price: string;
  quantity: number;
}

/**
 * Make a single fake product
 */
export const fakeProduct = (): FakeProduct => ({
  id: nanoid(6),
  name: faker.commerce.productName(),
  price: faker.commerce.price(3, 50, 2),
  quantity: randomNumber(20),
})

/**
 * Makes a bunch of fake products
 * @param count number of products to be created
 */

export const makeFakeProducts = (count = 3): FakeProduct[] => {
  let fakeProducts: FakeProduct[] = []
  for (let i = 0; i < count; i++){
    fakeProducts.push(fakeProduct())
  }
  return fakeProducts
}