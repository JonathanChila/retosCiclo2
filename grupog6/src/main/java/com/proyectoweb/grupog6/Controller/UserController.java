package com.proyectoweb.grupog6.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.proyectoweb.grupog6.Entities.User;
import com.proyectoweb.grupog6.Services.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<User> getAll(){
        return userService.getAll();
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public User newUser(@RequestBody User user) {
        return userService.newUser(user);
    }

    @GetMapping("/{email}")
    public Boolean existEmail(@PathVariable String email) {
        return userService.existEmail(email);
    }

    @GetMapping("/{email}/{password}")
    public User getUser(@PathVariable("email") String email, 
                        @PathVariable("password") String password) {
        return userService.getUser(email, password);
    }
}
