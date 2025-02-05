import React from "react";
import { configureStore, combineReducers, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ReduxContainer from './ReduxContainer';

// https://redux-toolkit.js.org/api/createSlice

// Common Root reducer
// const rootReducer = (state, action) => {
//     switch (action.type) {
//         case 'NAME_ACTION':
//             return {...state, name: {...action.payload}, fullName: action.payload.firstName + ' ' + action.payload.lastName }
//         case 'Address_ACTION':
//             return {...state, : {...action.payload} };
//         default:
//            return state;
//     }
// }

export const nameReducer = (state = {firstName: '', lastName: ''}, action) => {
    return action.type === 'NAME_ACTION' ? {...action.payload} : state;
}

export const addressReducer = (state = {homeAddress: '', permAddress: ''}, action) => {
    return action.type === 'Address_ACTION' ? {...action.payload} : state;
}

const nameActions = createSlice({
    name: 'nameActions',
    initialState: { firstName: '', lastName: ''},
    reducers: {
        name: (state, action) => ({...state, ...action.payload})
    }
});

const addressActions = createSlice({
    name: 'addressActions',
    initialState: { homeAddress: '', permAddress: ''},
    reducers: {
        addresses1: (state, action) => ({...state, ...action.payload})
    }
});
export const { name }  = nameActions.actions;
const nameActionReducer = nameActions.reducer;
export const { addresses1 }  = addressActions.actions;
const addressActionReducer = addressActions.reducer;
// Root Reducer using Slice
// const rootReducer = {name: nameActionReducer, addresses:addressActionReducer};

// Reducer using combiner or we can direct give as object
// const rootReducer = combineReducers({name: nameReducer, addresses: addressReducer});
const rootReducer = {name: nameReducer, addresses: addressReducer}; 

const store = configureStore({
    reducer: rootReducer // if it is function single reducer,  if it addressesis object multiple
    // preloadedState: {name: {firstName: '', lastName: ''}, fullName:'', addresses:{}}
});

// Old Approch 
// const store = createStore(reducers);

const ReduxApp = () => {
    return <Provider store={store}>
        <ReduxContainer />
    </Provider>
};
export default ReduxApp;