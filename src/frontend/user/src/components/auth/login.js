import React, { Component } from 'react';
import { withRouter } from "react-router";
import PropTypes from 'prop-types'
import $ from 'jquery';
import './login.css'
import { isLogin, setLogin, setuserid } from "../../index";

class Login extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            error: '',
        };
  
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
        this.connectLogin = this.connectLogin.bind(this);
        this.routeSignUp = this.routeSignUp.bind(this);
    }

    routeSignUp() {
        this.context.router.history.push("/signup");
    }

    connectLogin() {
        let usn = this.state.username;
        let psw = this.state.password;

        $.ajax({ url: "http://52.23.252.102:9000/user/signin",
            data: {username:usn, password:psw},
            context: document.body,
            crossDomain: true,
            async: false,
            type: "post",
            success: function(data) {
                if (data > 0) {
                    setLogin(true);
                    setuserid(data);
                }
            }
        });

        if (isLogin) {
          this.context.router.history.push("/tweets");
        } else {
          alert("Invalid username or password");
        }
    }
  
    dismissError() {
        this.setState({ error: '' });
    }
  
    handleSubmit(evt) {
        evt.preventDefault();
  
        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }
  
        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }
  
        return this.setState({ error: '' });
    }
  
    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };
  
    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }
  
    render() {
        return (
            <div className="box">
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={this.dismissError}>
                            <button onClick={this.dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }
                    <label>Username</label>
                    <input type="text" className="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
                  
                    <label>Password</label>
                    <input type="password" className="text" data-test="password"  value={this.state.password} onChange={this.handlePassChange} />
                  
                    <input className="btn" type="submit" value="Log In" data-test="submit" onClick={this.connectLogin}/>
                    <input className="btn2" type="submit" value="Sign Up" data-test="submit" onClick={this.routeSignUp}/>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);