import React from 'react';
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

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

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    };

    render() {

        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
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
                </form>
            </div>
        )
    }
}

export default SignIn;
