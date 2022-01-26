
import { useContext } from 'react';
import { AuthContext } from '../Pages/Context/AuthProvider/AuthProvider';

const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;