package com.sganzerla.controller;

import com.sganzerla.model.Cursos;
import com.sganzerla.service.CrudService;
import com.sganzerla.service.CursosService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("cursos")
public class CursosController extends CrudController<Cursos, Long> {

    private final CursosService cursosService;
    @Override
    protected CrudService<Cursos, Long> getService() {
        return this.cursosService;
    }

}
