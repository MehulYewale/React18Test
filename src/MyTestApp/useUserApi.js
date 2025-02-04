import {useEffect, useState, useRef, useCallback, useContext} from 'react';
import {promiseCall} from './fetchApi';
const useUserApi = (userId) => {
    const [data, setData] = useState(null);
    const loading  = useRef(false);
    const error  = useRef(false);
    useEffect(() => {
        let _loading = true;
        loading.current = true;
        error.current = false;
        promiseCall(userId).then(response => {
            if (_loading) {
                setData(response);
                loading.current = false;
            }
        }).catch(e => {
            if (_loading) {
                loading.current = false;
                error.current = true;
                setData(null);
            }
        });
        return () => { _loading = false; };
    }, [userId]);

    return { loading: loading.current, data, error: error.current };
}
export default useUserApi;