package com.sganzerla.controller;

import com.sganzerla.model.Alunos;
import com.sganzerla.service.AlunosService;
import com.sganzerla.service.CrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("alunos")
public class AlunosController extends CrudController<Alunos, Long> {

    private final AlunosService alunosService;
    @Override
    protected CrudService<Alunos, Long> getService() {
        return this.alunosService;
    }

}
