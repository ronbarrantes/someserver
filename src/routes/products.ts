import { Router } from "express"
import { FakeProduct, makeFakeProducts } from "../lib/fake-products"
import * as httpError from 'http-errors'
import { nanoid } from "nanoid"

let fakeProducts = makeFakeProducts()

const products = Router()
products.get('/products', (req, res)=>{
  res.send({
    products: fakeProducts,
  })
})

products.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = fakeProducts.find(item => item.id === productId)
  if(!product)
    throw httpError(404, 'Could not find product')
  res.send({ product })
})

products.post('/products', async ( req, res, next ) => {
  let product: FakeProduct = req.body
  if(!product){
    next()
    return httpError(400, 'No product input')
  }

  if(!product.name || !product.price){
    return next(httpError(400, 'Missing name or price'))
  }

  product = { ...product, id: nanoid(6)}

  fakeProducts = [ ...fakeProducts, product ]
  res.send({
    message: "product added",
    product,
  })
})

products.put('/products/:id', (req, res, next) => {
  const productUpdate = req.body
  const id = req.params.id

  // TODO: figure out update

  res.send({
    message: 'Product updated'
  })
})

products.delete('/products/:id', (req, res, next) => { 

  // TODO: add not found
  const id = req.params.id
  fakeProducts = fakeProducts.filter((item => item.id !== id))
  res.send({
    message: 'product deleted'
  })
})

export default products