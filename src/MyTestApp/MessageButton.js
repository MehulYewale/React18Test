
import { useCallback } from 'react';
import MessageServiceContext, { useMessageService } from './MessageServiec';
const MessageButton = () => {
  const messageService = useMessageService();
  const onMessageClick = () => {
    messageService.dispatchMessage({state: 'warning', message: "Message : " + (new Date()).toTimeString()});
  };
  return <button onClick={onMessageClick}>
    Print message
  </button>
};
export default MessageButton;