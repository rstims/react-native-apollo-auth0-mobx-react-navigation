import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import navigation           from './Navigation';
import LoginView            from '../views/Login';

@inject("authStore")
@observer
class Login extends Component {

    state = {
      viewLogin: true 
    }

    toggleLoginRegister = () => this.setState({viewLogin: !this.state.viewLogin})

    render() {

      const { authStore } = this.props;

      return (
        <LoginView
          toggleLoginRegister={this.toggleLoginRegister}
          viewLogin={this.state.viewLogin}
          onAuth={authStore.loginUser}
        />
      );
    }
}

export default navigation()(Login);
