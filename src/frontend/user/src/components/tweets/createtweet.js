import React, { Component } from 'react';
import { withRouter } from "react-router";
import PropTypes from 'prop-types'
import $ from 'jquery';
import { userid } from "../../index";

class Createtweet extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    constructor() {
        super();
        
        this.state = {
            tweet: "",
        };

        this.connectTweet = this.connectTweet.bind(this);
        this.handleTweetChange = this.handleTweetChange.bind(this);
    }

    handleTweetChange(evt) {
        this.setState({
            tweet: evt.target.value,
        });
    }

    connectTweet() {
        let uid = userid;
        let tweettext = this.state.tweet;

        // do word length check
        if (tweettext.length > 300 || tweettext.length <= 0) {
            alert("text length must be within 0 to 300");
            return;
        }

        // do user 0 check
        if (uid <= 0) {
            alert("Please Sign In before tweeting");
            return;
        }
    
        $.ajax({ url: "http://localhost:9001/comment/createtweet",
            data: {uid:uid, tweettext:tweettext},
            context: document.body,
            crossDomain: true,
            async: false,
            type: "post",
            success: function(data) {
                if (data === 0) {
                    window.location.reload(false);
                }
            }});
    }

    render() {
        return (
            <div className="createtweetbody">
                <form>
                    <input className="tweetinput" type="text" placeholder="Insert your tweet here!" data-test="tweet" value={this.state.tweet} onChange={this.handleTweetChange} />
                    <input className="tweetsubmit" type="submit" value="TWEET!" data-test="submit" onClick={this.connectTweet}/>
                </form>
            </div>
        )
    }
}

export default withRouter(Createtweet);