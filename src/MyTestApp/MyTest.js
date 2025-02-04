import React, {useState, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useTransition, useDeferredValue} from "react";

const _myContext = React.createContext("44444444");

const {Provider, Consumer} = _myContext;

export default function MyTest() {
    const [value, setValue] = useState("");
    const [showList,  setShowList] = useState(false);
    const myRef = useRef(null);
    const [isPending, startTransition]  = useTransition();
    const myDefValue = useDeferredValue(value);
    const [state, dispatch] = useReducer(myReducer, []);
    const gValue = useContext(_myContext);

    console.log("Component render myDefValue", myDefValue);
    console.log("GValue", gValue);

    const myCallBack = useCallback(() => {
        console.log("usCallback call");
    }, []);
    
    const myMemo = useMemo(() => {
        console.log("useMemo value dep myDefValue", myDefValue);
        myRef.current = myDefValue;
        return " " + myDefValue + value;
    }, [value]);

    console.log("myMemo value", myMemo);
    console.log("MyRef.current", myRef.current);

    useEffect(() => {
        console.log("first UseEffect");
    }, []);

    useEffect(() => {
        console.log("Second UseEffect");

        return () => {
        console.log("Second UseEffect destroy");
        }
    }, []);

    useEffect(() => {
        console.log("Value UseEffect dep myDefValue", myDefValue);
    }, [value]);

    useEffect(() => {
        console.log("myDefValue UseEffect", myDefValue);
    }, [myDefValue]);

    const onAdd = () => {
        console.log("On Add", myDefValue);
        dispatch({type:"A", value: value});
    }

    const toggleShowList = useCallback(() => {
        console.log("toggle List", showList);
        setShowList(!showList);
    }, [showList])


    return <>
    <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button onClick={onAdd}>Add</button>
        <button onClick={toggleShowList}> {!showList ? 'Show' : 'Hide' } List </button>
    </div>
    <div> Items Count: { state.length} </div>
    {
        showList &&
        (<ul>
            {
                state.map((value, i) => <div key={i}> {value} <b onClick={() => {}}>x</b></div>)
            }
        </ul>)
    }
    <MyContextProvider>
        <MyContextConsumer showList={showList} _v={state}/>
    </MyContextProvider>
    
    </>;

}

const MyContextConsumer = (props) => {
    const {gValue, setGValue} = useContext(_myContext);
    useEffect(() => {
        console.log("Inside MyContext Consumer showlist", props.showList);
        props._v.length > -1 && props.showList && setGValue(props._v.join(' '));
    }, [props.showList]);
    console.log("Inside MyContext Consumer gValue", gValue);
    return <MyContextProvider>
        This is Context Data: {gValue}
    </MyContextProvider>
}

const MyContextProvider = (props) => {
    const [gValue, setGValue] = useState('myTest');
    console.log("Inside MyContext Provider", gValue);
    return <Provider value={{gValue, setGValue}}>
        {props.children}
    </Provider>
}

const myReducer = (state, action) => {
    if (action.type = 'A') {
        return state.concat(action.value);
    } else if(action.type = 'R') {
        return state.filter((value) => value !== action.value);
    } else {
        return state;
    }
}