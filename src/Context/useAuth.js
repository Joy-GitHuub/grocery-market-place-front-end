import { useContext } from 'react';
import { context } from './AuthProvider';

const useAuth = () => {
    return useContext(context);
};

export default useAuth;