import React, { Component } from 'react';
import { TweetBody } from './tweet'

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
        $.ajax({ url: "http://localhost:9001/comment/gettweet",
        data: {count:firecount},
        context: document.body,
        crossDomain: true,
        async: false,
        type: "post",
        success: data => {
            // console.log(data);
            if (data == "N/A") {
                cont = false;
                return;
            }

            this.setState(previousState => ({
                users: [
                    ...previousState.users,
                    {
                        name: "test",
                        // image: data,
                        tweet: data,
                    },
                    // ...this.state.users,
                ]
                // users: this.state.users.concat({name: "test", tweet: data})
            }));
        }});

        if (cont) {
            console.log(this.state.users.name);
            firecount++;
            this.getUser();
        }
    }
  
    render() {
      return (
        <div className="main-body">
          {[...this.state.users].map((user, index) => {
            let name = `${user.name}`
            let handle = `@${user.name}`
            // let image = user.image
            let tweet = user.tweet
            // console.log(image)
            return(
                <TweetBody 
                    key={index}
                    name={name}
                    handle={handle}
                    tweet={tweet}
                    // image={image} 
                />
            )
          })} 
        </div>
      );
    }
  }
  
  export default Tweets;