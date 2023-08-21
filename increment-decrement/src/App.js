// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementAsync } from "./Actions/index";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync())}>
        Increment Async
      </button>
    </div>
  );
}

export default App;
