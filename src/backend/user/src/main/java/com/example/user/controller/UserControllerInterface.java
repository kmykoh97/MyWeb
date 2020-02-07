package com.example.user.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

public interface UserControllerInterface {

    // Upon successful signup, return 0 to frontend. Return 1 for duplicated username
    @RequestMapping("/user/signup")
    @CrossOrigin
    int signup(@RequestParam String username, @RequestParam String password);

    // Upon successful signin, return user_id to frontend. Frontend should store this user_id to be used on other services
    // returns 0 or exception error on failed signin
    @RequestMapping("/user/signin")
    @CrossOrigin
    int signin(@RequestParam String username, @RequestParam String password);

    // Upon successful password change, return 0 to frontend. Return 1 otherwise
    @RequestMapping("/user/changepassword")
    @CrossOrigin
    int changePassword(@RequestParam int id, @RequestParam String oldpassword, @RequestParam String newpassword);
}
