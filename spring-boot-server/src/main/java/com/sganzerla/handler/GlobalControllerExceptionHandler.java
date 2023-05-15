package com.sganzerla.handler;

import org.hibernate.engine.jdbc.spi.SqlExceptionHelper;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.ConstraintViolation;
import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
class GlobalControllerExceptionHandler {
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)  // 500
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<Object> handleConstraintViolation(Exception ex) {
        if (ex.getCause().getClass().equals(ConstraintViolationException.class)) {
            ConstraintViolationException exception = (ConstraintViolationException) ex.getCause();

            String message = exception.getSQLException().getMessage();

            String mensagemTraduzida = "";
            if (message.contains("FK")) {
                mensagemTraduzida = "Não é possível excluir este registro, pois ele está associado a outro registro.";
            } else if (message.contains("CK")) {
                mensagemTraduzida = "Não é possível excluir este registro, pois ele está associado a outro registro.";
            } else if (message.contains("UK")) {
                mensagemTraduzida = "Não é possível cadastrar este registro, pois ele já existe.";
            } else if (message.contains("NOT NULL")) {
                mensagemTraduzida = "Não é possível cadastrar este registro, pois um dos campos obrigatórios não foi preenchido.";
            } else if (message.contains("CHECK")) {
                mensagemTraduzida = "Não é possível cadastrar este registro, pois um dos campos obrigatórios não foi preenchido.";
            } else if (message.contains("UNIQUE KEY")) {
                mensagemTraduzida = "Não é possível cadastrar este registro, pois ele já existe.";
            } else {
                mensagemTraduzida = "Erro desconhecido.";
            }


            return new ResponseEntity<>(new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, mensagemTraduzida, mensagemTraduzida),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, ex.getMessage(), ex.getMessage()),
                HttpStatus.INTERNAL_SERVER_ERROR);
    }
}