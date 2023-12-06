import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './coomponents/home';
import AuthForm from './coomponents/Authform';


const Routerx = () => {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/auth' element={<AuthForm />} />
        </Routes>
    )
}

export default Routerx