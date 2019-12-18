import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Button from 'components/Button/Button';
import logo from 'assets/images/login_logo.png';
import "./SplashPage.css";

class SplashPage extends React.Component {
  constructor() {
    super();
    this.state = {
      loginClicked: false,
      registerClicked: false
    };
    this.toLogin = this.toLogin.bind(this);
    this.toRegister = this.toRegister.bind(this);
  }
  toLogin() {
    this.props.history.push('/login');
    this.setState({
      loginClicked: !this.state.loginClicked
    });
  }
  toRegister() {
    return <Redirect to='/register' />;
  }
  render() {
    return (
      <div className='SplashPage'>
        <img src={logo} alt='CoTripper Logo'/>
        <h1>CoTripper</h1>
        <p>Book trips, meet moms, and experience family travel together!</p>
        <Button text="Login" handleClick={this.toLogin} />
        <Button text="Register" color="purple" handleClick={this.toRegister} />
        {this.state.loginClicked ? <Redirect to='/login' /> : ''}
      </div>
    );
  }
}

export default SplashPage;
