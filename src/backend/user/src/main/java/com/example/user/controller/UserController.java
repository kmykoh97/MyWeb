package com.example.user.controller;

import com.example.user.entity.User;
import com.example.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;

@RestController
public class UserController implements UserControllerInterface{

    @Autowired
    private UserRepository userRepository;

    public String signup(@RequestParam String username, @RequestParam String password,
                         @RequestParam String email, @RequestParam String phone) {
        if (userRepository.existsByEmail(email) || userRepository.existsByPhone(phone) || userRepository.existsByUsername(username)) {
            return "username, email or phone already exist!";
        }

        User u = new User();
        u.setPassword(password);
        u.setUsername(username);
        u.setEmail(email);
        u.setPhone(phone);

        userRepository.save(u);

        return "register success";
    }

    public long signin(@RequestParam String username, @RequestParam String password) {
        if(!userRepository.existsByUsername(username)) {
            return Long.valueOf(0);
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        User u = userRepository.findUserByUsername(username);

        if (encoder.matches(password, u.getPassword())) {
            long user_id = u.getId();
            return user_id;
        }

        return Long.valueOf(0);
    }

    public String changePassword(@RequestParam long id, @RequestParam String oldpassword,
                          @RequestParam String newpassword) {
        return "test";
//        User u = userRepository.findUserById(id);
//        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//        if (!encoder.matches(oldPassword, u.getPassword())) {
//            return "Password not match! Not successful!";
//        }
//
//        u.setPassword(newPassword);
//        userRepository.save(u);
//
//        return "success";
    }

}
