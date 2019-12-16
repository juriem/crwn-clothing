import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import Header from './components/header/header.component';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";


function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/sign-in-and-sign-up' component={SignInAndSignUpPage} />
            </Switch>
        </Router>

    );
}

export default App;
