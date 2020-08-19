
  import React from 'react';
  import logo from './logo.svg';
  import './App.css';
  import { useTranslation } from 'react-i18next'
  import i18next from 'i18next';
  import About from './About';

import { Link, Switch,BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';
  function transol(lang){
    i18next.changeLanguage(lang)
  }
function Navbar() {
    const {t, i18n} = useTranslation()
    return (
        <navbar>
        <button onClick={()=>transol('ar')}>arabic</button>
        <button onClick={()=>transol('en')}>english</button>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        </navbar>
       
    );
  }
  
  export default Navbar;


