import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: {

    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state,action) => {
            const title = action.payload.title
            
            if (state.cart[title]) {
                state.cart[title].count += 1
            }
            else {
                
                state.cart[title] = {
                    count: 1,
                    price: action.payload.price
                }
            }
        },
        removeItem: (state,action) => {
            const title = action.payload.title
            if (state.cart[title].count === 1) {
                delete state.cart[title]
            }
            else {
                state.cart[title].count -= 1
            }
        }
    }
    
})

export const {addItem,removeItem} = cartSlice.actions
export default cartSlice.reducer