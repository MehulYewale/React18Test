import { BrowserRouter, Route, Routes, useParams, useMatch, useLocation, Link, NavLink, useHistory} from 'react-router';
// react-router-dom 5.2.0
const RouterApp = () => {
    return <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/users/:id' element={(props) => isNaN(props.match?.params?.id) ? 'Invalid User' : <User id={props.match?.params?.id} />}></Route> */}
        <Route path='/users' element={<Users />}/>
        <Route path='/todos' element={<Todo/>}/>
        {/* <PrivateRoute path="/private" element={<CustomPage/>} myValue={10}/>
        <PrivateRoute path="/private/:id" element={<CustomPage/>} /> */}
        </Routes>
    </BrowserRouter>
    </>;
} 

const Users = () => {
    return (<div>Users Page</div>);
}

const User = (props) => {
    return (<div>User Page <br/> {JSON.stringify(props)}</div>);
}

const Todo = () => {
   return (<div>Todo Page</div>);
    {/* <div>{JSON.stringify(props)}</div> */}
//    </>);
}

const HomePage = (props) => {
    return (<>
    <div>HomePage</div>
    <div>{JSON.stringify(props)}</div>
   </> );
}

const CustomPage = (props) => {
    return (<div>Custom Page <br/> {JSON.stringify(props)} </div>);
}

const PrivateRoute = ({ component: Component, ...rest}) => {
    console.log(rest);
    return <Route {...rest} render={(props) => {
         return <> <NavBar /> <Component {...{...props, value: rest.myValue}} /> </>;
    }} />
}

const NavBar = () => {
    return <div> NavBar</div>;

    // history.push();

}

export default RouterApp;