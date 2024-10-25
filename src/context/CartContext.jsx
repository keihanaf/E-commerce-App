import {createContext, useContext, useReducer, useEffect} from "react";
import {sumProducts} from "../helpers/helper.js";

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkOut: false,
}

const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem('cart');
        if (serializedCart === null) {
            return initialState;
        }
        return JSON.parse(serializedCart);
    } catch (err) {
        console.error('Error loading cart from localStorage:', err);
        return initialState;
    }
};

const saveCartToLocalStorage = (cart) => {
    try {
        const serializedCart = JSON.stringify(cart);
        localStorage.setItem('cart', serializedCart);
    } catch (err) {
        console.error('Error saving cart to localStorage:', err);
    }
};

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case "LOAD_CART":
            return action.payload;
        case "ADD_ITEM":
            if (!state.selectedItems.find((item) => item.id === action.payload.id)){
                state.selectedItems.push({...action.payload, quantity: 1})
            }
            newState = {
                selectedItems: [...state.selectedItems],
                ...sumProducts(state.selectedItems),
                checkOut: false,
            }
            break;
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter((item) => item.id !== action.payload.id)
            newState = {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumProducts(newSelectedItems),
            }
            break;
        case "INCREASE":
            const increaseIndex = state.selectedItems.findIndex((item) => item.id === action.payload.id)
            state.selectedItems[increaseIndex].quantity++
            newState = {
                ...state,
                ...sumProducts(state.selectedItems),
            }
            break;
        case "DECREASE":
            const decreaseIndex = state.selectedItems.findIndex((item) => item.id === action.payload.id)
            state.selectedItems[decreaseIndex].quantity--
            newState = {
                ...state,
                ...sumProducts(state.selectedItems),
            }
            break;
        case "CHECKOUT":
            newState = {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkOut: true,
            }
            break;
        default:
            throw new Error("Invalid Action!")
    }
    
    saveCartToLocalStorage(newState);
    return newState;
}

const CartContext = createContext();

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState, loadCartFromLocalStorage);

    useEffect(() => {
        const loadedCart = loadCartFromLocalStorage();
        if (loadedCart !== initialState) {
            dispatch({ type: "LOAD_CART", payload: loadedCart });
        }
    }, []);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    const {state, dispatch} = useContext(CartContext);
    return [state, dispatch];

}

export default CartProvider;
export { useCart }
