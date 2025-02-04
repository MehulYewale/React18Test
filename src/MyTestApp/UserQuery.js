import useUserApi from './useUserApi';
const UserQuery = ({userId, children}) => {
    const {loading, data, error} = useUserApi(userId);
    console.log('userQuery ', loading, data, error);
    return !error ? <div> { loading ? 'Loading...' : children(data) } </div> : 'Error in Request';
}
export default UserQuery;