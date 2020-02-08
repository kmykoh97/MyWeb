package com.example.comment.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

public interface TweetsControllerInterface {

    // Place tweet into database. Return 0 on success, 1 otherwise
    // We should limit length of tweet in front-end to simplify backend
    @RequestMapping("/comment/createtweet")
    @CrossOrigin
    int createtweet(@RequestParam int uid, @RequestParam String tweettext);

    // Get tweets from database 1 by 1. Return text
    // If reached end of database, return "N/A" (temporary solution to keep application small. Transfer burden to frontend)
    @RequestMapping("/comment/gettweet")
    @CrossOrigin
    String gettweet(@RequestParam int count);

    @RequestMapping("/test")
    @CrossOrigin
    String tst();

}
