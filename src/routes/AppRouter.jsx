import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Component from '../components/Component';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    return user ? children : <Navigate to="/login" />;
};

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Component /></PrivateRoute>} />
        </Routes>
    </Router>
);

export default AppRouter;
