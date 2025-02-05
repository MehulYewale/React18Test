import React from 'react';
import './index.css';
import MessageAndUserServiceContext from './MessageAndUserServiceContext';
import RouterApp from './RouterApp';
// import reportWebVitals from './reportWebVitals';
import CounterApp from './CounterApp';
import ReduxApp from "../ReduxApp/ReduxApp";
import ToDoItems from './ToDoItems';
import MyContext from './MyContext';
import PokemonApp from '../Pokemon';
import GuestUser from '../GuestUser';

const MyTestApp = () => (
  // React strictmode effects the useEffect duplicate renders
  // <React.StrictMode>
    // <MessageAndUserServiceContext />
    // <MyTest />
    <RouterApp />
    // <PokemonApp />
    // <GuestUser />
  //  <MyApp/>
  //  <ToDoItems/>
  //  <ReduxApp />
  // </React.StrictMode>
);

export default MyTestApp;
