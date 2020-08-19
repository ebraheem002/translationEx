import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';
import Navbar from './NavBar';
import HomePage from './HomePage';
import About from './About';
import {  Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
function transol(lang){
  i18next.changeLanguage(lang)
}
function App() {
  const {t, i18n} = useTranslation()
  return (
    <Router>
    <div className="App">
    <Navbar />

      <Switch>



        <Route exact  path="/" component={HomePage} >
        </Route>
        <Route path="/about" >
          <About/>
          </Route>

      </Switch>


    </div>
    </Router>
  );
}

export default App;
