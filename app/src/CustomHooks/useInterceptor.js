import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useInterceptor = (interceptorFunction) => {
    const token = useSelector(state => state.auth.token);
    useEffect(() => {
        const interceptor = interceptorFunction(token);

        // Cleanup function
        return () => {
            console.log("done"); // Eject the interceptor when component unmounts
        };
    }, [interceptorFunction, token]);
};

export default useInterceptor;
