import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/index";
import { Fragment } from "react";


const Counter = () => {
    const dispatch =  useDispatch();
    const counter =useSelector((state) => state.counter.counter);
    const show = useSelector((state) =>  state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterAction.increment());
    };

    const decrementHandler = () => {
        dispatch(counterAction.decrement());
    };

    const increaseHandler =() => {
        dispatch(counterAction.increase(10));
    };

    const toogleHandler = () => {
        dispatch(counterAction.toogleCounter());
    };

    return (
        <Fragment>
        
        <p>Redux</p>
        { show && <div>{counter}</div>}
        <div>
            <button onClick={incrementHandler} style={{backgroundColor:'#34a4eb', fontWeight:'bold'}}>Increase</button>
            <button onClick={decrementHandler} style={{backgroundColor:'red', fontWeight:'bold'}}>Decrease</button>
            <button onClick={increaseHandler} style={{backgroundColor:'#34a4eb', fontWeight:'bold'}}>Increase By 10</button>
        </div>
        <div>
            <button onClick={toogleHandler} style={{backgroundColor:'#e32441', fontWeight:'bold'}}>Toogle</button>
        </div>
       
        </Fragment>
        
    );
};

export default Counter;