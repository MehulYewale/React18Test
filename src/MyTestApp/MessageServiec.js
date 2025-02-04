import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

const context = React.createContext({dispatchMessage: () => {}});

const MessageServiceContext = ({children}) => {
   const [messageQueue, setMessageQueue] = useState([]);
   const msgQue = useRef([]);
   
   useEffect(() => {
      msgQue.current = messageQueue;
   }, [messageQueue]);

   const closeMessage = useCallback((index) => {
      setMessageQueue(msgQue.current.filter((v, i) => i !== index));
   },[]);

   const dispatchMessage = useCallback((message) => {
      const clearMessageInMilliseconds = (ms) => setTimeout(() => {
      console.log('messageQueue######', messageQueue);
         // handleClose();
         setMessageQueue(msgQue.current.slice(1));
      }, ms);

      if (!message?.message) {
         alert();
         return;
      }

      if (message.state === 'warning') {
        clearMessageInMilliseconds(8000);
      }
   
      const messages = [...messageQueue, message];
      setMessageQueue(messages);
   }, [messageQueue]);

   const _value = useMemo(() => ({ dispatchMessage }), [dispatchMessage]);
   console.log(messageQueue);

    return <context.Provider value={_value}>
        {messageQueue.map((item, i) => <div key={i}> <span>{item.message}</span>  <b onClick={() => closeMessage(i)}>#</b> </div>)}
        {children}
    </context.Provider>;
}

export const useMessageService = () => useContext(context);
export default MessageServiceContext;