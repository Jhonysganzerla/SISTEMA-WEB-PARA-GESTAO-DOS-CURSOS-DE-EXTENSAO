package com.sganzerla.controller;

import com.sganzerla.model.TurmaCurso;
import com.sganzerla.service.CrudService;
import com.sganzerla.service.TurmaCursosService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("turma")
public class TurmaCursosController extends CrudController<TurmaCurso, Long> {

    private final TurmaCursosService turmacursosService;
    @Override
    protected CrudService<TurmaCurso, Long> getService() {
        return this.turmacursosService;
    }

}
