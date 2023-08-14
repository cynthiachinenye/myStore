import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { PRODUCTS } from '../../Products'
import CartItem from './CartItem'
import './Cart.css'


const Cart = () => {
  const {items} = useContext(ShopContext)
  return (
    <div className="cart">
      <div>
         <h1>Your Cart Items</h1>
      </div>

       <div className="cartitems">
         { PRODUCTS.map((product) => {
          if (items[product.id] !== 0){
            return <CartItem data={product}/>
          }
         })}
       </div >      
    </div>
  )
}

export default Cart