import React, { useContext } from 'react'
import ShopContext from '../../Context/ShopContext'

const Product = (props) => {
    const {addToCart} = useContext(ShopContext)
    const {id, productName, price,productImage} = props.data
  return (
    <div className="product">
        <img src={productImage}/>

        <div className="description">

            <p><b>{productName}</b></p>
            
            <p>${price}</p>

        </div>
        <button className="btn" onClick={() =>addToCart(id)}>Add To Cart</button>
    </div>
  )
}

export default Product