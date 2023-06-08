package com.proyectoweb.grupog6.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.proyectoweb.grupog6.CrudRepository.UserCrudRepository;
import com.proyectoweb.grupog6.Entities.User;

@Repository
public class UserRepository {
    @Autowired
    private UserCrudRepository userCrudRepository;

    public User newUser(User user) {
        return userCrudRepository.save(user);
    }

    public User updUser(User user) {
        return userCrudRepository.save(user);
    }

    public List<User> getUsers() {
        return (List<User>) userCrudRepository.findAll();
    }

    public void deleteUser(User user) {
        userCrudRepository.delete(user);
    }

	public Optional<User> existEmail(String email) {
		return userCrudRepository.findByEmail(email);
	}

    public Optional<User> getUser(String email, String password) {
        return userCrudRepository.findByEmailAndPassword(email, password); //
    }

}
