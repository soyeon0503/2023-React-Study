import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
// Provider로 감싸진 컴포넌트들은 리덕스에 엑세스할 수 있다.
// 앱 전체가 저장소에 엑세스 해야하거나 대다수가 저장소에 엑세스해야한다면 최고 수준의 컴포넌트를 provider로 감싸는 것이 좋다
// provider prop으로 전달되는 것은 {저장소} 이다
// 위의 예제 코드 같은 경우는 임포트하는 store는 Provider컴포넌트의 store prop의 값으로 설정된다