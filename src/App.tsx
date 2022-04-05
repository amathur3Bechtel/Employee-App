import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AllUsers from './components/AllUsers';
import CreateUser from './components/CreateUser';
import Navbar2 from './components/Navbar2';
import { BrowserRouter, Link, NavLink, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Router } from 'express';
import { Switch } from '@material-ui/core';
import { NOTFOUND } from 'dns';
import notFound from './components/notFound';
import { link } from 'fs';
import { render } from '@testing-library/react';
import EmpPage from './components/EmpPage';
import EditUser from './components/EditUser';

function App()  {
  return (
    <BrowserRouter>
    <Navbar/>
    <Navbar2/>
    <Routes>
      <Route path='/' element={<EmpPage />} />
      <Route path ="/all" element={<AllUsers/>}/>
      <Route path ="/add" element={<CreateUser/>}/>
      <Route path='/edit/:id' element={<EditUser />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
