package com.sganzerla.controller;

import com.sganzerla.model.TipoCursos;
import com.sganzerla.service.CrudService;
import com.sganzerla.service.TipoCursosService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("tipocursos")
public class TipoCursosController extends CrudController<TipoCursos, Long> {

    private final TipoCursosService tipocursosService;
    @Override
    protected CrudService<TipoCursos, Long> getService() {
        return this.tipocursosService;
    }

}
