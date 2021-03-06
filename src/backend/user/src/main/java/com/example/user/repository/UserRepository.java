package com.example.user.repository;

import com.example.user.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    boolean existsByUsername(String username);

    User findUserByUsername(String username);

    User findUserById(long id);

}
