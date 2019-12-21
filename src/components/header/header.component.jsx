import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector} from "reselect";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
    HeaderContainer,
    LogoContainer,
    OptionLink,
    OptionsContainer
} from "./header.styles";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, cartDropdownIsHidden, handleCartIconClick }) => (
    <HeaderContainer>

        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/sign'>SING IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            cartDropdownIsHidden ? null : <CartDropdown/>
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartDropdownIsHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);