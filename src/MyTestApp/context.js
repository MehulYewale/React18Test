import React, { useContext } from "react";
import UserQuery from "./UserQuery";
const context = React.createContext({ name: 'Guest User'});

const {Provider, Consumer} = context;

const UserContext = ({id, children}) => {
    return <UserQuery userId={id}>{data => <Provider value={data}> {children} </Provider>}</UserQuery>;
}
UserContext.Consumer = Consumer;

export const useUserContext = () => useContext(context);
export default UserContext;
