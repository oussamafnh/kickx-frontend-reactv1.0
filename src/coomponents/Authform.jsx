import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {
    loginSuccess,
    registerSuccess,
    loginFailure,
    registerFailure,
} from '../store/actions/auth';
import './css/Authform.css';

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleAuth = async (e) => {
        e.preventDefault();
        try {
            const endpoint = isLoginForm ? 'login' : 'register';
            const response = await axios.post(`http://192.168.1.7:8000/api/${endpoint}`, {
                username: isLoginForm ? undefined : username,
                email,
                password,
            });

            setMessage(response.data.message);

            if (response.data.message === 'User registered successfully') {
                setIsLoginForm(true);
                dispatch(registerSuccess(response.data));
                localStorage.setItem('authToken', response.data.token);
            } else if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);

                setIsLoginForm(true);
                dispatch(loginSuccess(response.data));
            }


        } catch (error) {
            setMessage(`Authentication ${isLoginForm ? 'login' : 'registration'} failed. Please try again.`);
            console.error(error);

            if (isLoginForm) {
                dispatch(loginFailure(error));
            } else {
                dispatch(registerFailure(error));
            }
        }
    };
    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
            dispatch(loginSuccess({ message: 'User logged in successfully' }));
            setIsLoginForm(true);
        }
    }, []);


    const toggleForm = () => {
        setIsLoginForm((prev) => !prev);
        setMessage('');
    };

    return (
        <div className="auth-container">
            <form className="auth-form">
                <h2>{isLoginForm ? 'Login' : 'Register'}</h2>
                {!isLoginForm && (
                    <div className="input-group">
                        <label>Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                )}
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="button-group">
                    <button onClick={handleAuth}>{isLoginForm ? 'Login' : 'Register'}</button>
                </div>
                <p className="toggle-form" onClick={toggleForm}>
                    {isLoginForm ? "Don't have an account? Sign up" : 'Already have an account? Login'}
                </p>
                {message && <p className={message.includes('failed') ? 'error' : 'success'}>{message}</p>}
            </form>
        </div>
    );
};

export default AuthForm;
