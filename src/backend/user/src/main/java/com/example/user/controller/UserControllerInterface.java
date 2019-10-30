package com.example.user.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

public interface UserControllerInterface {

    // Alert!!!
    // gender: 0 for male, 1 for female
    @RequestMapping("/user/signup")
    @CrossOrigin
    String signup(@RequestParam String username, @RequestParam String password,
                  @RequestParam String email, @RequestParam String phone);

    // Upon successful signin, return user_id to frontend. Frontend should store this user_id to be used on other services
    // returns 0 or exception error on failed signin
    @RequestMapping("/user/signin")
    @CrossOrigin
    long signin(@RequestParam String username, @RequestParam String password);

    @RequestMapping("/user/changepassword")
    String changePassword(@RequestParam long id, @RequestParam String oldpassword,
                          @RequestParam String newpassword);
}
