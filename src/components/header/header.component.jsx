import React from 'react';
import './header.styles.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, cartDropdownIsHidden, handleCartIconClick }) => (
    <div className='header'>

        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/sign'>SING IN</Link>
            }
            <CartIcon/>
        </div>
        {
            cartDropdownIsHidden ? null : <CartDropdown/>
        }
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser: currentUser,
    cartDropdownIsHidden: hidden
});

export default connect(mapStateToProps)(Header);