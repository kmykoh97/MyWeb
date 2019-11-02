import React, { Component } from 'react';
import {withRouter} from "react-router";
import { Router, Route, Switch, Link } from 'react-router-dom';

import {isLogin, setLogin} from "../../index";

class Mainpage extends Component {

    render() {
        return (
            <div>
            <h1>Welcome to my website</h1>
            <Link to={"/login"}>Login here</Link>
            </div>
        );
    }
}

export default withRouter(Mainpage);