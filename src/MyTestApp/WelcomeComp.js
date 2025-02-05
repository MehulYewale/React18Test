import { useUserContext } from "./UserContext";

const WelcomeComp = () => {
 const user = useUserContext();
 return <h3> Welcome {user ? user.name : 'Guest User'} </h3>
};
export default WelcomeComp;