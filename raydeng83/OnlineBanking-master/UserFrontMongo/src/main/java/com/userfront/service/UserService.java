package com.userfront.service;

import com.userfront.domain.User;
import com.userfront.domain.security.UserRole;

import java.util.List;
import java.util.Set;

/**
 * Created by z00382545 on 10/20/16.
 */
public interface UserService {

    User createUser (User user, Set<UserRole> userRoles);

    User findByUsername(String username);

    User findByEmail(String email);

    boolean checkUserExists(String username, String email);

    boolean checkUsernameExists(String username);

    boolean checkEmailExists(String email);

    List<User> findUserList();

    void enableUser (String username);

    void disableUser (String username);

    User saveUser (User user);
}
