import {createSlice} from '@reduxjs/toolkit';
// 슬라이스 함수를 만드는 함수로 슬라이스에 고유한 이름을 부여할 필요가 있다.

const uiSlice = createSlice({
    name: 'ui',
    initialState:{
        cartIsVisible: false
    },
    reducers: {
        // reducer로 처리하고자 하는 액션을 담은 메소드
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});
// ui 액션을 내보내서 쓰기
export const uiAction = uiSlice.actions;
export default uiSlice;