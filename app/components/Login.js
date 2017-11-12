import React, { Component } from 'react';
import { observer }         from 'mobx-react/native'
import navigation           from './Navigation';
import LoginView            from '../views/Login';

@observer
class Login extends Component {

    state = {
      viewLogin: true 
    }

    toggleLoginRegister = () => this.setState({viewLogin: !this.state.viewLogin})

    onAuth = (credentials, profile) => {
      console.log(credentials);
      console.log(profile);
    }

    render() {
      return (
        <LoginView
          toggleLoginRegister={this.toggleLoginRegister}
          viewLogin={this.state.viewLogin}
          onAuth={this.onAuth}
        />
      );
    }
}

export default navigation()(Login);
