import React,{createContext,useState} from 'react'
import { PRODUCTS } from '../Products';
import Cart from '../Pages/Cart/Cart';

export const shopContext = createContext(null)

const getCart = () => {
    let cart ={};
    for (let i =1; i <PRODUCTS.length + 1; i++){
        Cart[i] = 0;

    }
    return Cart;
}

const ShopContext = (props) => {
    const [items,setItems] = useState(getCart())


    const addToCart = (itemId) => {
        setItems ((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))

    }
    const context = {items, addToCart, removeFromCart}
    console.log(items)
  return (
    <shopContext.Provider value={context}>{props.children}</shopContext.Provider>
  )
}

export default ShopContext