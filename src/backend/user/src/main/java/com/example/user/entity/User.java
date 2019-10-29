package com.example.user.entity;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="user")
public class User {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String username;

    private String password;

    private String phone;

    private String email;

    private int gender = 1;

    private int age = 0;

    private int enabled = 1;

}
