package com.sganzerla.controller;

import com.sganzerla.model.Usuario;
import com.sganzerla.service.CrudService;
import com.sganzerla.service.UsuariosService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("alunos")
public class AlunosController extends CrudController<Usuario, Long> {

    private final UsuariosService usuariosService;
    @Override
    protected CrudService<Usuario, Long> getService() {
        return this.usuariosService;
    }

}
