import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementAction, incrementAction, resetAction } from "../redux/action/action";


const Counter = () => {
    const dispatch = useDispatch()
    const { count } = useSelector(state => state.counterReducer)
    console.log(count)
    return <><h1>Counter App</h1>
        <br /><br />
        <div><span>Result : {count}</span></div>
        <br /><br />
        <div><button onClick={() => dispatch(incrementAction())}>Increment</button></div>
        <br /><br />
        <div><button onClick={() => dispatch(decrementAction())}>Decrement</button></div>
        <br /><br />
        <div><button onClick={() => dispatch(resetAction())}> Reset</button></div>
    </>
}

export default Counter