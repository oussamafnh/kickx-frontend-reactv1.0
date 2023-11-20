// AuthModal.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './css/AuthModal.css';

const AuthModal = ({ onClose }) => {
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    

    const [error, setError] = useState(null);
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = async () => {
        try {
            // Fetch CSRF token from the server
            const csrfResponse = await fetch('http://127.0.0.1:8000/api/csrf-token');
            const { csrf_token } = await csrfResponse.json();
    
            // Make the registration request with the obtained CSRF token
            const response = await fetch('http://127.0.0.1:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token,
                },
                body: JSON.stringify(registerData),
            });
    
            console.log(response); // Log the entire response for debugging
    
            const data = await response.json();
    
            console.log(data);
            setSuccessMessage('User registered successfully. Please log in.');
            setIsLoginForm(true); // Switch to login form
        } catch (error) {
            setError('Registration failed. Please try again.');
            console.error('Registration failed', error);
        }
    };
    
    
    const handleLogin = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
    
            const data = await response.json();
    
            console.log(data);
            setSuccessMessage('User logged in successfully.');
            // Store the token in your app's state or local storage
        } catch (error) {
            setError('Invalid email or password. Please try again.');
            console.error('Login failed', error);
        }
    };
    

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
        setError(null); // Clear any previous errors
    };

    return (

        <motion.div
            className="auth-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="modal-content">
                <div className="close-icon" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 0 1024 1024" version="1.1">
                        <path d="M899.818723 555.092447 382.719588 555.092447c-23.796986 0-43.091424-19.294438-43.091424-43.091424 0-23.799032 19.294438-43.091424 43.091424-43.091424l517.099135 0c23.799032 0 43.091424 19.292392 43.091424 43.091424C942.910147 535.798009 923.617755 555.092447 899.818723 555.092447zM185.058786 512.001023l335.979054 335.979054c16.827247 16.827247 16.827247 44.110637 0 60.939931-16.827247 16.829294-44.110637 16.829294-60.939931 0L93.700055 542.522154c-8.428973-8.426927-12.623505-19.47761-12.611226-30.524201-0.013303-11.044544 4.182252-22.095227 12.611226-30.522154L460.096886 115.079992c16.829294-16.829294 44.112684-16.829294 60.939931 0 16.827247 16.827247 16.827247 44.112684 0 60.939931L185.058786 512.001023z" />
                    </svg>
                </div>

                <h2>{isLoginForm ? 'Login' : 'Sign Up'}</h2>

                {/* Registration or Login Form */}
                <div className="auth-section">
                    {isLoginForm ? (
                        <>
                            <input
                                type="email"
                                placeholder="Email"
                                value={loginData.email}
                                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={loginData.password}
                                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            />
                            <button onClick={handleLogin}>Login</button>
                            <p className="additional-text" onClick={toggleForm}>
                                Not registered yet ? Sign up now!
                            </p>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                placeholder="Username"
                                value={registerData.username}
                                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={registerData.email}
                                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={registerData.password}
                                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                            />
                            <button onClick={handleRegister}>Register</button>
                            <p className="additional-text" onClick={toggleForm}>
                                Already have an account? Log in now!
                            </p>
                        </>
                    )}
                </div>

                {successMessage && <p className="success-message">{successMessage}</p>}
                {error && <p className="error-message">{error}</p>}

            </div>
        </motion.div>

    );
};

export default AuthModal;
