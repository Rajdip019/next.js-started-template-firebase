import React from 'react'
import { useAuth } from '../../context/AuthContext'

const login = () => {

    const { login, logout, currentUser } = useAuth();
    return (
        <div className=' flex justify-center items-center h-screen bg-black'>
            {currentUser ? (
                <button className=' bg-white text-black text-xl px-6 py-2 rounded-xl' onClick={() => login()}>SignIn with Google</button>
            ) : (
                <button className=' bg-white text-black text-xl px-6 py-2 rounded-xl' onClick={logout}>Logout</button>
            )}
        </div>
    )
}

export default login