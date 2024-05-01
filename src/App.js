import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './slices/counterSlice';
import { useEffect, useRef } from 'react';

function App() {

  let value = useSelector( ( state ) => state.counter.value )
  const dispatch = useDispatch()
  const times = useRef(0)
  // const timer = useRef(null)

  const onClickHandler = (event) => {
    // clearInterval(timer.current)
  }

  useEffect(()=>{
    times.current += 1
    console.log("times current", times.current, value)
  })

  useEffect(()=>{
    
    const timer = setInterval(()=>{
      console.log("interval", Date.now())
      dispatch(increment())

    },20000)

    console.log("timer", timer)

    return ()=>{
      console.log("cleanup running")
      // clearInterval(timer.current)
    }

  },[])
  
  return (
    <div className="">
      <header className="app">
        {value}
      </header>

      <button onClick={onClickHandler}>Stop</button>
    </div>
  );
}

export default App;
