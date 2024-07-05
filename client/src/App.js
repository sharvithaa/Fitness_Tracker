import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup';
import {BrowserRouter, Routes, Route, Link, Switch, Router} from 'react-router-dom'
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Logs from './pages/Logs';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login'  element={<Login/>}></Route>
        <Route path='/logs'  element={<Logs/>}></Route>
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
