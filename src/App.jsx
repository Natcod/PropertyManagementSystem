
import './App.css'

import { Routes, Route, Link } from 'react-router-dom';
import Component from './components/Component'
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Component />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/singup" element={<Signup />}></Route>
        </Routes>
    )
}

export default App
