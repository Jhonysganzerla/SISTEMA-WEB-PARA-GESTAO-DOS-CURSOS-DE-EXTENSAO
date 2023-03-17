package com.sganzerla.controller;

import com.sganzerla.model.TurmaCursos;
import com.sganzerla.service.CrudService;
import com.sganzerla.service.TurmaCursosService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("turma")
public class TurmaCursosController extends CrudController<TurmaCursos, Long> {

    private final TurmaCursosService turmacursosService;
    @Override
    protected CrudService<TurmaCursos, Long> getService() {
        return this.turmacursosService;
    }

}
