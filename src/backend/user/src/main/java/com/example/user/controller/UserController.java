package com.example.user.controller;

import com.example.user.entity.User;
import com.example.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController implements UserControllerInterface{

    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/user/signup")
    @CrossOrigin
    public int signup(@RequestParam String username, @RequestParam String password) {
        if (userRepository.existsByUsername(username)) {
            return 1;
        }

        User u = new User();
        u.setPassword(password);
        u.setUsername(username);

        userRepository.save(u);

        return 0;
    }

    @RequestMapping("/user/signin")
    @CrossOrigin
    public int signin(@RequestParam String username, @RequestParam String password) {
        if(!userRepository.existsByUsername(username)) {
            return 0;
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        User u = userRepository.findUserByUsername(username);

        if (encoder.matches(password, u.getPassword())) {
            return u.getId();
        }

        return 0;
    }

    @RequestMapping("/user/changepassword")
    @CrossOrigin
    public int changePassword(@RequestParam int id, @RequestParam String oldpassword,
                              @RequestParam String newpassword) {
        User u = userRepository.findUserById(id);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        if (!encoder.matches(oldpassword, u.getPassword())) {
            return 1;
        }

        u.setPassword(newpassword);
        userRepository.save(u);

        return 0;
    }

}
