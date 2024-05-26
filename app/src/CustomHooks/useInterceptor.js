import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useInterceptor = (interceptorFunction) => {
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    useEffect(() => {
        const interceptor = interceptorFunction({ token, dispatch });

        // Cleanup function
        return () => {
            console.log("done"); // Eject the interceptor when component unmounts
        };
    }, [interceptorFunction, token, dispatch]);
};

export default useInterceptor;
