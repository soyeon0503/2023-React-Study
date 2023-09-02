import { configureStore } from "@reduxjs/toolkit";
// 스토어를 구성한 다음 객체가 되면 루트 리듀서를 설정한다
// 단일 리듀서 함수 또는 리듀서 맵을ㅊ만들 수 있다
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer:{
        ui : uiSlice.reducer,
        cart : cartSlice.reducer,
    }
});

export default store;