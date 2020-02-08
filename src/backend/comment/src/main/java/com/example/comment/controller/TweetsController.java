package com.example.comment.controller;

import com.example.comment.entity.Tweets;
import com.example.comment.repository.TweetsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TweetsController {

    @Autowired
    private TweetsRepository tweetsRepository;

    @RequestMapping("/comment/createtweet")
    @CrossOrigin
    public int createtweet(@RequestParam int uid, @RequestParam String tweettext) {
        Tweets t = new Tweets();
        t.setUid(uid);
        t.setTweet(tweettext);

        tweetsRepository.save(t);

        return 0;
    }

    @RequestMapping("/comment/gettweet")
    @CrossOrigin
    public String gettweet(@RequestParam int count) {
        // count == id in our context as our id will start from 1
        if (!tweetsRepository.existsById(count)) {
            return "N/A"; // we might need to change this for availability and security reasons
        }

        Tweets t = tweetsRepository.findTweetsById(count);

        return t.getTweet();
    }

}
