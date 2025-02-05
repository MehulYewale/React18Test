import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addresses1 } from "./ReduxApp";

const ReduxAdress = () => {
    const {homeAddress, permAddress} = useSelector(state => state.addresses);
    console.log((useSelector(state => state)));
    const dispatch = useDispatch();
    const onChange = (payload) => {
        dispatch({ type: 'Address_ACTION', payload:{homeAddress, permAddress, ...payload} });
        // dispatch(addresses1({homeAddress, permAddress, ...payload}));
    }
    return <>
    <h3> Address:</h3>
        <div>
            Home Address : <input type="text" value={homeAddress} onChange={(e) => onChange({homeAddress:e.target.value})}/>
        </div>
        <div>
            Permanant Address : <input type="text" value={permAddress} onChange={(e) => onChange({permAddress:e.target.value})} />
        </div>
        <div> Home Address: { homeAddress } </div>
        <div> Permanant Address: {permAddress } </div>
    </>;

}
export default ReduxAdress;