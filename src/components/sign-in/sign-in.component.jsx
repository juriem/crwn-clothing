import React from 'react';
import { connect } from 'react-redux';

import { emailAndPasswordSignInStart, googleSignInStart } from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInContainer, SingInTitle } from "./sign-in.styles";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { emailAndPasswordSignIn } = this.props;
        const { email, password } = this.state;
        emailAndPasswordSignIn(email, password);
        this.setState({
            email: '',
            password: ''
        })
    };

    render() {
        const { googleSignInStart } = this.props;

        return (
            <SignInContainer className='sign-in'>
                <SingInTitle>I already have an account</SingInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name="email"
                        value={this.state.email}
                        required
                        label='E-mail'
                        handleChange={this.handleChange}/>
                    <FormInput
                        type='password'
                        name="password"
                        value={this.state.password}
                        required
                        label='Password'
                        handleChange={this.handleChange}/>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" isGoogleSignIn={true} onClick={googleSignInStart}>Sign In with
                        Google</CustomButton>
                </form>
            </SignInContainer>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailAndPasswordSignIn: (email, password) => dispatch(emailAndPasswordSignInStart({ email, password }))
});

export default connect(
    null,
    mapDispatchToProps
)(SignIn);
