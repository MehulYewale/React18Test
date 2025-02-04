import React from 'react';
import './index.css';
import App from './App';
import RouterApp from './RouterApp';
// import reportWebVitals from './reportWebVitals';
import MyApp from './MyApp';
import ReduxApp from './ReduxApp';
import MyApp2 from './Myapp2';
import MyTest from './MyTest';

const MyTestApp = () => (
  // React strictmode effects the useEffect duplicate renders
  // <React.StrictMode>
    // <App />
    // <MyTest />
    <RouterApp />
  //  <MyApp/>
  //  <MyApp2/>
  //  <ReduxApp />
  // </React.StrictMode>
);

export default MyTestApp;
