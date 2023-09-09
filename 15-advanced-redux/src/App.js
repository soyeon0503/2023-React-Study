import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector , useDispatch} from 'react-redux';
import { Fragment, useEffect } from 'react';
import { uiAction } from './store/ui-slice';
import Notification from'./components/UI/Notification';

let isInitial = true;

function App() {
  // useSelector 훅을 가져온 컴포넌트 함수는 리덕스에 접근할 수 있다
  // useSelector를 사용하려면 리덕스 상태를 자동으로 받는 함수를 전달해야한다
  const showCart = useSelector(state => state.ui.cartIsVisible);
  // useEffect의 종속성 값이 바뀔 때마다 http수신을 한다
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  const dispatch = useDispatch();
  
  useEffect(()=>{
    const sendCartData = async () => {
      dispatch(uiAction.showNotification({
        status: 'pending',
        title : 'Sending',
        message: 'Sending cart data...',
      }));
      const response = await fetch('https://react-cart-43575-default-rtdb.firebaseio.com/cart.json',{
          method: 'PUT',
          body: JSON.stringify(cart), //장바구니 데이터를 json파일로 변환하여 요청의 일부로 보낸다
      });
      if(!response.ok){
        new Error('Sent cart data failed!');
      }
      dispatch(uiAction.showNotification({
        status: 'success',
        title : 'Success!',
        message: 'Sent cart data successfully!',
      }));

      // const responseData = await response.json();
        // 이미 useSelector에 대한 종속성으로 추가했다 장바구니가 변경되면 fetch요청이 다시 실행된다 
    }
    if(isInitial){
      isInitial = false;
      return;
    }
    sendCartData().catch((error)=>{
      dispatch(uiAction.showNotification({
        status: 'error',
        title : 'Error!',
        message: 'Sent cart data failed!',
      }));
    });
  },[cart, dispatch]);

  return (
    <Fragment>
      {notification && 
        <Notification 
          status={notification.status} 
          title={notification.title}
          message={notification.message}
        />
      }
      <Layout>
        {showCart && <Cart /> }
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

// 리듀서는 인풋을 받아 아웃풋을 생성해내는 순수하고 부수효과가 없는 동기식 함수이다
// 리듀서에 전달되는 훅도 순수함수여야한다
// 인풋을 받았을 때  동일한 아웃풋을 생성하며 이를 차단하는 비ㅇㅣ 코도 없고 도중에 발생하는
// 부수효과도 없다면 리듀서 함수의 일부가 되어선 안된다

// 그렇지만 이는 리덕스로 작업할 때 보내야하는 HTTP 요청과 같이 부수 효과가 수반되는
// 일부 작업을 전달할 때 부수효과가 있는 코드를 어디에 넣어야하는지 의문이 둘 수도 있다

// 우리는 이런 비동기 코드를 useEffect를 사용하여 컴포넌트에 직접 비동기 코드의 부수효과를 넣는 걸로 해결할 수 있는데
// 이 방법은 부수효과가 완료된 후에만 작업을 전달하기 때문에
// 리덕스는 그 부수 효과에 대해 아무것도 알지 못하거나
// 우리가 우리 자신의 작업 크리에이터 함수를 작성하는 새로운 것이 되어
// 자동으로 생성된 리덕스 툴킷을 제공하는 것을 사용하지 않을 수도 있다
// 다른 방법으로는 직접 리덕스 작업 크리에이터의 일부로 부수 효과를 실행하고 비동기 작업을
// 실행할 수 있는 솔루션을 가지고 있다


// http 요청을 하는 리덕스를 어플리케이션에 통합하려면 어떻게 해야할까?
// 우선 리듀서는 순수함수여야하고 부수효과가 없고 동기식이어야 한다
// 따라서 http요청과 같은 비동기식 코드는 리듀서 함수에 들어가선 안된다.
// 부수효과는 절대로 리덕스 안에서 수행해선 안된다.


// 리덕스의 상태를 변경해서는 안되며, 리덕스 외부에서 수행될 수 없다.

