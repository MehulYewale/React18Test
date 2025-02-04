import {useState, useTransition, useDeferredValue, useEffect, useId} from 'react';
import UserContext, {useUserContext} from './context';
import { fetchApi, asyncCall, promiseCall } from './fetchApi';
import WelcomeComp from './WelcomeComp';
import MessageButton from './MessageButton';
import MessageServiceContext from './MessageServiec';

function App() {
  const [text, settext] = useState('');
  const [data, setData] = useState('');
  const [isPending, startTransition] = useTransition();
  const id = useId(); // application specific Id

  // const data = useDeferredValue(text);
  // var u = function () { var n = l((0, e.useState)(""), 2), t = n[0], r = n[1];


  // useEffect(() => {
  //  setData(text);
  // },[text]);



  useEffect(() => {
    let isCalled = false; 
    console.log('########1', isCalled);
    // fetchApi();
    // asyncCall();
    // promiseCall();
    function serviceCalls() {
      if (!isCalled) {
        console.log('########2', text);
        fetchApi();
        asyncCall();
        promiseCall(1).then((data) => console.log('promiseCall', data), (error) => console.log('promiseCall Rejected' , error)).catch((error) => console.error(error));
      }
    }
    setTimeout(() => serviceCalls(), 500);
    return () => { 
      isCalled = true;
      console.log('unmoutn useffect', isCalled); 
    };
  }, [text]);

  const handleOnChange = (value) => {
    settext(value);
    startTransition(() => {
      setData(value);
    });
    // setData(value); // lagging issue on input as well as list
  }


  return (
    <div className="App">
      <header className="App-header">
      <div style={{display: 'flex', backgroundColor: 'yellow', alignItems: 'center'}}> 
        {/* <div><img src={logo} width={50}  heigh={50} className="App-logo" alt="app-logo" /> </div> */}
          <div style={{flexGrow: 1}}> This is a header row - {id} </div>
          {/* (0,o.jsx)("div",{style:{flexGrow:1},children:" This is header Row"})]})}), */}
        </div>
      </header>
      <section>
        <form>
          <input type="text" value={text} placeholder="Enter text here" onChange={(event) => handleOnChange(event.target.value)}/>  
        </form>
        <div><b>Your Enter text: </b>{text}</div>
        {/* 
        ("section",{children:[(0,o.jsx)("form",{children:
        (0,o.jsx)("input",{type:"text",value:t,onChange:function(e){return r(e.target.value)}})}),
        (0,o.jsxs)("div",{children:[(0,o.jsx)("b",{children:"Your Enter text: "}),t]})]})]})}
         */}

         {/* <button onClick={handleClick}> Click here </button> */}
         {
          isPending ? 'Loading...' : Array.from({length: 10000}).map((_ , i) => <div key={i}> {data} </div>)
         }
      </section>

      <section> 
        <p> Context/HOC Section</p>
        <UserContext id="2">
          <WelcomeComp />
          <UserContext.Consumer>
            {(user) => <h2> Welcome {user?.name} </h2>}
          </UserContext.Consumer>
        </UserContext>
        <UserContext.Consumer>
          {(user) => <h2> Welcome2 {user?.name} </h2>}
        </UserContext.Consumer>
        
        </section>

        <section> 
        <p> Message Service with context</p>

        <MessageServiceContext>
         <MessageButton></MessageButton>
        
        </MessageServiceContext>
        </section>
    </div>
  );
}

export default App;
// import React, { useState, useEffect } from 'react';

// const  App  = (props)  => {
//   const [timer, setTimer] = useState(0);
//   const [timerOn, setTimerOn] = useState(false);

//     useEffect(()  =>  {
//             console.log("on UseEffect ");
//            let _timer = null;
//           if (timerOn) {
//             _timer = setInterval(() => {
//                 setTimer(timer => timer + 1);
//             }, 1000);
//           }
//         return () => {  
//             console.log('on Return  ');
//             _timer && clearInterval(_timer); 
//         };
//     }, [ timerOn]);

//   const startTimer = () => {
//       setTimerOn(true);
//   };

//   const stopTimer = () => {
//        setTimerOn(false);
//   };

//   return (
//     <div className='App'>
//       <h1>Hello React.</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <div> {timer} </div>
//       <button onClick={startTimer}> Start </button>
//       <button onClick={stopTimer}> Stop </button>
//     </div>
//   );
// }

// export default App;
