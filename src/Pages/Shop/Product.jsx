import React, { useContext } from 'react'
import {ShopContext} from '../../Context/ShopContext'

const Product = (props) => {
    const {addToCart,items} = useContext(ShopContext)
    const {id, productName, price,productImage} = props.data;

    const cartItemAmount = items[id]
 
  return (
    <div className="product">
        <img src={productImage} />

        <div className="description">

            <p><b>{productName}</b></p>
            
            <p>${price}</p>

        </div>
        <button className="btn" onClick={() =>addToCart(id)}>
          Add To Cart
          {cartItemAmount > 0  &&  <> ({cartItemAmount})</>}
          </button>
    </div>
  )
}
          

export default Product