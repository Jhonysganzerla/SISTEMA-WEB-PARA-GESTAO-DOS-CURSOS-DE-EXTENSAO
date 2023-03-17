package com.sganzerla.controller;

import com.sganzerla.model.CursosGraduacao;
import com.sganzerla.service.CrudService;
import com.sganzerla.service.CursosGraduacaoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("cursosgraduacao")
public class CursosGraduacaoController extends CrudController<CursosGraduacao, Long> {

    private final CursosGraduacaoService cursosGraduacaoService;
    @Override
    protected CrudService<CursosGraduacao, Long> getService() {
        return this.cursosGraduacaoService;
    }

}
