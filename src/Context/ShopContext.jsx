import React,{createContext,useState} from 'react'
import { PRODUCTS } from '../Products';
import Cart from '../Pages/Cart/Cart';

export const ShopContext = createContext(null)

const getCart = () => {
    let cart ={};
    for (let i =1; i <PRODUCTS.length + 1; i++){
        cart[i] = 0;

    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [items,setItems] = useState(getCart())

    const getTotalAmount = () =>{
        let totalAmount = 0;
        for(const item in items){
            if(items[item]> 0){
                let itemInfo =PRODUCTS.find((product) => product.id === Number(item))
                totalAmount += items[item] * itemInfo.price 
            }
        }
        return totalAmount
        
    }
    const addToCart = (itemId) => {
        setItems ((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))

    }
    const editItems = (newItem, itemId) => {
        setItems((prev) => ({...prev, [itemId]:newItem}))

    }
    const context = {
        items, 
        addToCart, 
        removeFromCart,
        editItems,
        getTotalAmount,
    }
     console.log(items)
  return (
    <ShopContext.Provider value={context}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider