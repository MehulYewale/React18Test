import React from "react";
import { useState } from 'react';

const MyApp = (props) => {
//    const [value, setValue] = useState(10);
//    const increase = () => setValue(value => value + 1);
//    const decrease = () => setValue(value => value - 1);
   const {cValue: cFirstValue, increase: cFirstIncrease, decrease:cFirstDecrease } = useCounter();
   const {cValue: value, increase, decrease } = useCounter(10);
   
    return <>
        <div> Value : {value } </div>
        <button onClick={increase}> Increase </button><button onClick={decrease}> Decrease </button>
        <p>Counter First Value</p>
        <div> Value : {cFirstValue } </div>
        <button onClick={cFirstIncrease}> Increase </button><button onClick={cFirstDecrease}> Decrease </button>
    </>;
}

const useCounter = (initialValue = 0) => {
    const [cValue, setCValue] = useState(initialValue);

    const increase = () => setCValue(value => value + 1);
    const decrease = () => setCValue(value => value - 1);

    return { cValue, setCValue, increase, decrease};
}

export default MyApp;
