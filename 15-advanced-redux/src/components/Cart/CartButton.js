import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-slice';
import { useDispatch, useSelector} from 'react-redux';

const CartButton = (props) => {
  // 리듀서의 액션을 불러와서 처리한다
  // dispatch 훅을 사용하면 리덕스 액션에 접근할 수 있다
  const dispatch = useDispatch();
  const cartQuantity= useSelector(state => state.cart.totalQuantity);
  const toggleCartHandler = () =>{
    dispatch(uiAction.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity} </span>
    </button>
  );
};

export default CartButton;
