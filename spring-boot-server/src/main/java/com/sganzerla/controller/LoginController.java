package com.sganzerla.controller;

import com.sganzerla.model.Usuario;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.security.UserDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("login")
public class LoginController {

    private final AuthUserService authUserService;

    public LoginController(AuthUserService authUserService) {
        this.authUserService = authUserService;
    }

    @GetMapping("user-info")
    public UserDTO getUserInfo(Principal principal) {
        return new UserDTO( (Usuario)
                authUserService.loadUserByUsername(principal.getName()));
    }
}
