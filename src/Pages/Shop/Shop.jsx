import React from 'react'
import {PRODUCTS} from './../../Products'
import Product from './Product'
import './Shop.css'

const Shop = () => {
  return (
    <div className="Shop">
      <div className="shopTitle">
        <h1>Cyndy's Store</h1>
      </div>
      <div className="products">{PRODUCTS.map((product) => <Product data={product}/>)}</div>

    </div>
  )
}

export default Shop