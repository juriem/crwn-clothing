import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.page";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

class App extends React.Component {

    componentDidMount() {
        const { checkUserSession } = this.props;
        checkUserSession()
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/sign'
                           render={() => this.props.currentUser ? (<Redirect to='/'/>) : <SignInAndSignUpPage/>}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser,
        collectionsToAdd: selectCollectionsForPreview
    }
);

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
