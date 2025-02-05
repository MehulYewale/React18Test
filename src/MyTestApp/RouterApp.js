import { BrowserRouter, Route, Routes, Navigate, useParams, useMatch, useLocation, Link, NavLink, useHistory, Outlet } from 'react-router';
import PageNotFound from './PageNotFound';
import { useCallback } from 'react';
import Timer from './Timer';
import ToDoItems from './ToDoItems';
import CounterApp from './CounterApp';
import MessageAndUserServiceContext from './MessageAndUserServiceContext';
import MyContext from './MyContext';
import PokemonApp from '../Pokemon';
import GuestUser from '../GuestUser';
import ReduxApp from '../ReduxApp/ReduxApp';
// react-router-dom 5.2.0

const RouterApp = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} errorElement={<PageNotFound />} />
                <Route path='/users' element={<Users />}>
                    <Route path=':id' element={<User id={2} />} />
                    {/* <Route path='/users/:id' children={(props) => isNaN(props.match?.params?.id) ? <b>Invalid User</b> : <User id={props.match?.params?.id} />}></Route> */}
                </Route>
                <Route path='/todos' element={<ToDoItems />} />
                <Route path='/timer' element={<Timer />} />
                <Route path='/counter' element={<CounterApp />} />
                <Route path="/messages" element={<MessageAndUserServiceContext/>} />
                <Route path="/context" element={<MyContext/>} />
                <Route path="/pokemon" element={<PokemonApp/>} />
                <Route path="/guest" element={<GuestUser/>} />
                <Route path="/redux" element={<ReduxApp/>} />

                {/* <PrivateRoute path="/private" element={<CustomPage/>} myValue={10}/>
                <PrivateRoute path="/private/:id" element={<CustomPage/>} /> */}

                {/* single route test */}
                <Route path="/private/:id"
                    element={
                        <PrivateRoute>
                            <CustomPage/>
                        </PrivateRoute>
                    }
                />

                {/* multiple auth test */}
                <Route path="/private-outlet" element={<PrivateOutlet />}>
                 <Route index element={<CustomPage />} />      {/* will navigate to home screen */}
                    <Route path=":id" element={<CustomPage />} />
                </Route>

                {/* <Route path="*" element={<Navigate to="/" />} /> */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    </>;
}

const Users = () => {
    const { id } = useParams();
    const getActiveClass = useCallback(({ isActive }) => isActive ? 'active' : '', []);
    return <><h3>Users Page</h3>
        <nav>
            <NavLink replace to='1' className={getActiveClass}>User 1</NavLink> |
            <NavLink replace to='2' className={getActiveClass}>User 2</NavLink> |
            <NavLink replace to='test' className={getActiveClass}>User 3</NavLink>
        </nav>
        {id && isNaN(id) ? <b>Invalid User</b> : <Outlet />}
    </>;
}

const User = (props) => {
    const { id } = useParams();
    return <>
        <div>User Page: {Number(id) + props.id}</div>
        <Link replace to="/users">Back</Link>
    </>;
}

const CustomPage = (props) => {
    return (<div>Custom Page <br /> {JSON.stringify(props)} </div>);
}

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     console.log(rest);
//     return <Route {...rest} render={(props) => {
//         return <> <NavBar /> <Component {...{ ...props, value: rest.myValue }} /> </>;
//     }} />
// }

function PrivateRoute({ children }) {
    const auth = useParams();
    return auth.id ? <>{children}</> : <Navigate to="/" />;
  }

const PrivateOutlet = () => {
    const auth = useParams();
    return auth.id ? <Outlet /> : <Navigate to="/" />;
};

const HomePage = (props) => {
    return (<>
        <div>HomePage</div>
        <div>{JSON.stringify(props)}</div>
    </>);
}

const NavBar = () => {
    return <div> NavBar</div>;

    // history.push();

}

export default RouterApp;