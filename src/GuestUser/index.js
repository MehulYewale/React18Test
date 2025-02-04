import { useContext, useEffect, useState } from "react";
import "./styles.css";
import UserNameProvider, { useUserNameContext, UserNameContext } from "./UserContext";

// codesandbox.io/s/mystifying-bash-fd0f4u?file=/src/App.js
// codesandbox.io/s/proud-monad-6xuh75
// https://codesandbox.io/s/proud-monad-6xuh75-8h2d13

function getUserId(name) {
  return new Promise((resolve, reject) => {
    if (name.toLowerCase().indexOf("admin") > -1) {
      const USER_ID = name.toUpperCase().concat("_", Math.random());
      setTimeout(() => {
        resolve(USER_ID);
      }, 2000);
    } else {
      reject({ error: "Guest User" });
    }
  });
}
async function getUserName(name) {
  try {
    const userId = await getUserId(name);
    console.log("Inside Async: ", userId);
    return userId.split("_")[0];
  } catch (e) {
    console.log(e);
  }
}
function withEntitlementHOC(WrappedComponent) {
  return (props) => {
    const userNameAsync = getUserName("admin");

    // const { userName, setUserName } = useContext(UserNameContext);
    // const { userName, setUserName } = useContext(UserNameContext);
    const [userName, setUserName] = useState("Guest User");
    useEffect(() => {
      userNameAsync.then((uName) => {
        if (uName) {
          setUserName(uName);
          console.log("Inside async then: ", uName);
        }
      });
    }, []);
    return <WrappedComponent {...props} userName={userName} />;
  };
}

function Greeting({ isloggedIn, userName, morning }) {
  const uName = isloggedIn ? userName : "Guest User";
  return <h3>{morning ? `Good Morning ${uName}` : `Good Night ${uName}`}</h3>;
}

const UserGreeting = withEntitlementHOC(Greeting);

export default function GuestUser() {
  const [isloggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    getUserId("GUEST")
      .then((data) => {
        return data;
      })
      .then((userId) => {
        console.log("Inside Promise then: ", userId);
      })
      .catch((error) => {
        console.log("Inside Promise catch: ", error);
      });
  }, []);

  const toggleLogin = () => {
    setLoggedIn(!isloggedIn);
  };
  return (
    <div className="App">
      <button onClick={toggleLogin}>{isloggedIn ? "Logout" : "Login"}</button>
      <UserNameProvider>
        <UserGreeting morning isloggedIn={isloggedIn}></UserGreeting>
        <UserGreeting isloggedIn> </UserGreeting>
      </UserNameProvider>
      <Greeting isloggedIn userName="Raje" />
    </div>
  );
}
