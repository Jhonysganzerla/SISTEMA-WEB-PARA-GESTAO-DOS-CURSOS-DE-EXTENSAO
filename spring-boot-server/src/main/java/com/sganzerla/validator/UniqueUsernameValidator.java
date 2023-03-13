package com.sganzerla.validator;

import com.sganzerla.annotation.UniqueUsername;
import com.sganzerla.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class UniqueUsernameValidator
        implements ConstraintValidator<UniqueUsername, String> {

    @Autowired
    UsuariosRepository usuariosRepository;

    @Override
    public boolean isValid(String ra,
                           ConstraintValidatorContext constraintValidatorContext) {
        if (usuariosRepository.findByRa(ra) == null) {
            return true;
        }
        return false;
    }
}
