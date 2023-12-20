import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './coomponents/home/home';
import AuthForm from './coomponents/Authform';
import Sneakers from './coomponents/sneakers/sneakers';
import Sneaker from './coomponents/sneaker/sneaker';


const Routerx = () => {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/auth' element={<AuthForm />} />
            <Route path='/sneakers' element={<Sneakers />} />
            <Route path='/sneaker/:id' element={<Sneaker />} />
        </Routes>
    )
}

export default Routerx