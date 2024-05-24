import { useEffect } from 'react';

const useInterceptor = (interceptorFunction) => {
    useEffect(() => {
        const interceptor = interceptorFunction();

        // Cleanup function
        return () => {
            console.log("done"); // Eject the interceptor when component unmounts
        };
    }, [interceptorFunction]);
};

export default useInterceptor;
