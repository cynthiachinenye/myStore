import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { PRODUCTS } from '../../Products'
import CartItem from './CartItem'
import './Cart.css'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const {items,getTotalAmount} = useContext(ShopContext)
  const totalAmount = getTotalAmount()
  const navigate = useNavigate()
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
       </div>
       {totalAmount > 0 ?(
       <div className="checkout">
          <p> Subtotal : $ {totalAmount}</p>
          <button onClick={()=> navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
       </div>  
      ):(
        <h1> Your Cart is Empty</h1>
      )}    
    </div>
  )
}

export default Cart