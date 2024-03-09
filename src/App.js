import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Menu from './components/Menu';
import StudList from './components/StudList';
import AddStud from './components/AddStud';
import Signout from './components/Signout';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import MenuFirst from './components/MenuFirst';
import Reg from './components/Reg';

function App() {
  return (
    <Router>
      <div>
        <Header />
       
        {/* Conditionally render MenuFirst only on the homepage */}
        <Routes>
          <Route path="/" element={<MenuFirst />} />
          <Route path="/Home" element={<Home />} />
         
          <Route path="/list-stud" element={<StudList />} />
          <Route path="/add-stud" element={<AddStud />} />
          <Route path="/sign-stud" element={<Signup />} />
          <Route path="/sign-stud" element={<Signout />} />
          <Route path="/menu-stud" element={<Menu />} />
          <Route path="/reg-stud" element={<Reg />} />
          <Route path="/login-stud" element={<Login />} />
          <Route path="/edit-student/:id" element={<AddStud />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
