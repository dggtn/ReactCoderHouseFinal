import { useState } from 'react'
import  {createContext} from 'react'

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const addToCart = (item, quantity) => {
        if (!isInCart(item.id)) {
            setItems([...items, {item: item, quantity: quantity}]);
        }
    }

    const deleteFromCart = (itemId) => {
        setItems(items.filter(e => e.item.id !== itemId));
    }

    const clearCart = () => {
        setItems([]);
    }

    const isInCart = (itemId) => {
        return items.find(e => e.item.id === itemId) != undefined;
    }

    const hasItems = () => items.length > 0;

    const getTotal = () => {
        const total = items.reduce(
            (acumulador, cartItem) => {
                return acumulador + (cartItem.quantity * cartItem.item.price)
            }, 0)
        return total.toLocaleString('es-ar', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 2
        });
    }

    const count = () => items.reduce((acumulador, cartItem) => acumulador + cartItem.quantity, 0)

    return <CartContext.Provider value={{items, addToCart, deleteFromCart, clearCart, isInCart, hasItems, getTotal, count}}>
        { children }
    </CartContext.Provider>
}

export default CartContextProvider;

