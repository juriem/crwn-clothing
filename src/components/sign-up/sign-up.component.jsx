import React from 'react';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { SignInContainer, SingInTitle } from "../sign-in/sign-in.styles";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await  createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch ( error ) {
            console.log('error create new user', error.message);
        }
    };

    render() {

        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <SignInContainer className='sign-up'>
                <SingInTitle className='title'>I do not have an account</SingInTitle>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        label='Display name'
                        value={displayName}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput type='email'
                               name='email'
                               label='Email'
                               value={email}
                               handleChange={this.handleChange}
                               required
                    />
                    <FormInput type='password'
                        name='password'
                               label='Password'
                               value={password}
                               handleChange={this.handleChange}
                               required
                    />
                    <FormInput type='password'
                               name='confirmPassword'
                               label='Confirm password'
                               value={confirmPassword}
                               handleChange={this.handleChange}
                               required
                    />

                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </SignInContainer>
        )
    }
}

export default SignUp;