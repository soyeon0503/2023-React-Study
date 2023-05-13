import SimpleInput from './components/SimpleInput';

function App() {
  return (
    <div className="app">
      <SimpleInput />
    </div>
  );
}

export default App;

// 폼은 입력때문에 넓고 다양한 상태를 나타낼 수 있어서 복잡하다
//  하나 이상의 입력값이 모두 유효하지 않을 수도 있고
// 서버로 리퀘스트 보낸 뒤에 특정 값이 사용 가능한지 확인해야 하는 작업을 걸쳐야 할 때도 있다
// 입력값과 유효값을 확인해야하는 번거로움...?
// 입력값의 유효성을 언제 검사해야 하는 지...?
