import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import "./mainpage.css"

class Mainpage extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to Mini Twitter</h1>
                <img className="mainpageimg" src="https://i.ibb.co/f058C6m/We-Chat-Image-20200208165927.jpg" border="0" />
                <p></p>
                <button className="mainpagebtn"><Link to={"/login"}>Login here</Link></button>
                <p></p>
                <button className="mainpagebtn"><Link to={"/signup"}>Signup here</Link></button>
                <p>for guest who do not want to sign up, you can use default username and password(username: root, password: 0000)</p>
            </div>
        );
    }

}

export default withRouter(Mainpage);