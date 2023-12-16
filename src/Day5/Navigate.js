import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navigate() {
    const navigate = useNavigate();
    const loginButton = () => { navigate('/login') }
    const signupButton = () => { navigate('/signup') }
    return (
        <div>
            <button onClick={loginButton}>Login</button>
            <button onClick={signupButton}>Signup</button>
        </div>
    )
}