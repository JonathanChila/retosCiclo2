package com.proyectoweb.grupog6.CrudRepository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.proyectoweb.grupog6.Entities.User;

public interface UserCrudRepository extends CrudRepository<User, Integer>{

    public Optional<User> findByEmail(String email);

    public Optional<User> findByEmailAndPassword(String email, String password); 
}
