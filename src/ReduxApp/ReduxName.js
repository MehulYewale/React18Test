import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { name } from './ReduxApp';

const ReduxName = () => {
    console.log(useSelector((state) => state ));
    const {firstName, lastName} = useSelector((state) => state.name);
    // const fullName = useSelector((state) => state.fullName);
    const dispatch = useDispatch();
    const onChange = (payload) => {
        dispatch({ type: 'NAME_ACTION', payload:{firstName, lastName, ...payload} });
        // dispatch(name({firstName, lastName, ...payload}));
    }
    return <>
      <h3> Name:</h3>
        <div>
            First Name : <input type="text" value={firstName} onChange={(e) => onChange({firstName:e.target.value})}/>
        </div>
        <div>
            Last Name : <input type="text" value={lastName} onChange={(e) => onChange({lastName:e.target.value})} />
        </div>
        <div>Full Name: {firstName + " " + lastName} </div>
        </>
}
export default ReduxName;