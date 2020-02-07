package com.example.comment.repository;

import com.example.comment.entity.Tweets;
import org.springframework.data.repository.CrudRepository;

public interface TweetsRepository extends CrudRepository<Tweets, Long> {

    Tweets findTweetsById(int id);

    boolean existsById(int id);

}
