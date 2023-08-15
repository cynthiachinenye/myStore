import React,{useContext} from 'react'
import { ShopContext } from '../../Context/ShopContext'


const CartItem = (props) => {
    const {id, productName, price, productImage } = props.data
    const {items, addToCart, removeFromCart,editItems} = useContext(ShopContext)
  return (
    <div class="items">
       <img src={productImage}/>
       <div className="description">
         <p className="p">
          <b>{productName}</b>
         </p>

           <p>${price}</p>
           <div className="countHandler">
             <button onClick={() => removeFromCart(id)}> - </button>
             
             <input value={items [id]} onChange={(e)=> editItems(Number(e.target.value), id)}/>

             <button onClick={ () => addToCart(id)}> + </button>
           </div>
       </div>
    </div>
  )
}

export default CartItem