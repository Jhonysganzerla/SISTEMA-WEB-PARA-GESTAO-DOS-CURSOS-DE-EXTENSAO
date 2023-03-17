package com.sganzerla.controller;

import com.sganzerla.model.Chamada;
import com.sganzerla.service.ChamadaService;
import com.sganzerla.service.CrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("chamada")
public class ChamadaController extends CrudController<Chamada, Long> {

    private final ChamadaService chamadaService;
    @Override
    protected CrudService<Chamada, Long> getService() {
        return this.chamadaService;
    }

}
