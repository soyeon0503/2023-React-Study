import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addItemToCart(state, action){
            // 디스페치될 때 추가 정보(등록되는 아이템)의 정보를 디스패치해야한다
            const newItem = action.payload;
            //  추가 버튼을 눌렀을 때 기존에 등록 되어 있는 상품인지 확인하고 배열에 아이템 정보 값을 넣는다
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity ++;
            if(!existingItem) {
                state.items.push({
                    id : newItem.id, 
                    price: newItem.price, 
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }else{
                existingItem.quantity ++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if(existingItem.quantity === 1 ){
                state.items = state.items.filter((item) => item.id !== id);
            }else{
                existingItem.quantity --;
                // existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});
export const cartActions = cartSlice.actions;
export default cartSlice;