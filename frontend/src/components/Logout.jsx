import React from 'react'
import { useAuth } from '../context/Authprovider.jsx'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function Logout() {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const logout = () => {
        setAuth(
            {
                ...auth,
                user: null
            }
        )
        localStorage.removeItem('user');
        setTimeout(() => {
            toast.success('Logout Successfully');
            window.location.reload();
        }, 3000);
        navigate('/');


    }
    return (
        <div>
            <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300' onClick={logout}>
                LOGOUT
            </button>
        </div>
    )
}

export default Logout
