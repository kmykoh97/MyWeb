import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createBrowserHistory from 'history/createBrowserHistory'
import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch } from 'react-router';
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import Mainpage from './components/mainpage/mainpage'
import Tweets from './components/tweets/tweets'

let history = createBrowserHistory();
let isLogin = false;
let userid = 0;

let setLogin = function (value) {
    isLogin = value;
};

let setuserid = function (value) {
    userid = value;
}

ReactDOM.render((
    <Router history={history}>
        <div>
            <App />
            <Switch>
                <Route exact path={"/"} component={Mainpage}/>
                <Route exact path={"/login"} component={Login}/>
                <Route exact path={"/signup"} component={Signup}/>
                <Route exact path={"/mainpage"} component={Mainpage}/>
                <Route exact path={"/tweets"} component={Tweets}/>
            </Switch>
        </div>
    </Router>), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export {isLogin, setLogin, userid, setuserid};