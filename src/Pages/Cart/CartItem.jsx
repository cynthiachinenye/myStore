import React from 'react'

const CartItem = (props) => {
    const {id, productName, price, productImage } = props.data
  return (
    <div class="items">
       <img src={productImage}/>
       <div className="description">
         <p>
          <b>{productName}</b>
         </p>

           <p>${price}</p>
           <div className="countHandler">
             
           </div>
       </div>
    </div>
  )
}

export default CartItem