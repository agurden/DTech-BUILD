package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

@Service
@Transactional
public class UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        // Validate if user already exists
        if (userRepository.findByEmail(user.getEmail()) != null) {
            logger.error("User with email {} already exists", user.getEmail());
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User already exists with email " + user.getEmail());
        }
        logger.info("Creating user with email {}", user.getEmail());
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> {
                    logger.error("User not found with id {}", id);
                    return new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found with id " + id);
                });
    }

    public User updateUser(Long id, User updatedUser) {
        User existingUser = getUserById(id);
        existingUser.setFirstName(updatedUser.getFirstName());
        existingUser.setLastName(updatedUser.getLastName());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setPassword(updatedUser.getPassword());
        existingUser.setAge(updatedUser.getAge());
        existingUser.setGender(updatedUser.getGender());
        logger.info("Updated user with id {}", id);
        return userRepository.save(existingUser);
    }

    public void deleteUser(Long id) {
        User existingUser = getUserById(id);
        userRepository.delete(existingUser);
        logger.info("Deleted user with id {}", id);
    }

    public User getUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            logger.error("User not found with email {}", email);
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found with email " + email);
        }
        return user;
    }
}
