import React, { Component } from 'react';
import {withRouter} from "react-router";

import {isLogin, setLogin} from "../../index";

class Mainpage extends Component {

    render() {
        return (
            <h1>hello world</h1>
        );
    }
}

export default withRouter(Mainpage);