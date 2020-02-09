import React, { Component } from 'react';
import { TweetBody } from './tweet'
import Createtweet from './createtweet'
import './tweets.css';
import $ from 'jquery';

var firecount = 1;
var cont = true;

class Tweets extends Component {

    constructor(props) {
        super(props)

        this.state = {
          users: []
        };

        this.getUser = this.getUser.bind(this)
    }
  
    componentWillMount() {
        this.getUser()
    }
  
    getUser() {
        $.ajax({ url: "http://52.23.252.102:9001/comment/gettweet",
            data: {count:firecount},
            context: document.body,
            crossDomain: true,
            async: false,
            type: "post",
            success: data => {
                if (data === "N/A") {
                    cont = false;
                    return;
                }

                this.setState(previousState => ({
                    users: [
                        ...previousState.users,
                        {
                            name: "test",
                            tweet: data,
                        },
                    ]
                }));
            }
        });

        if (cont) {
            console.log(this.state.users.name);
            firecount++;
            this.getUser();
        }
    }
  
    render() {
        return (
            <div className="main-body">
                <Createtweet/>
                {[...this.state.users].map((user, index) => {
                let name = `${user.name}`
                let handle = `@${user.name}`
                let image = "https://i.ibb.co/f058C6m/We-Chat-Image-20200208165927.jpg"
                let tweet = user.tweet
                return (
                    <TweetBody 
                        key={index}
                        name={name}
                        handle={handle}
                        tweet={tweet}
                        image={image} 
                    />
                )
                })}
            </div>
        );
    }
}

export default Tweets;