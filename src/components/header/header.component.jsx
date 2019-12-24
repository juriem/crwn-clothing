import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector} from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
    HeaderContainer,
    LogoContainer,
    OptionLink,
    OptionsContainer
} from "./header.styles";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, cartDropdownIsHidden, signOut }) => (
    <HeaderContainer>

        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                currentUser ?
                    <OptionLink to='#' as='div' onClick={signOut}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/sign'>SING IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            cartDropdownIsHidden ? null : <CartDropdownContainer/>
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartDropdownIsHidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);