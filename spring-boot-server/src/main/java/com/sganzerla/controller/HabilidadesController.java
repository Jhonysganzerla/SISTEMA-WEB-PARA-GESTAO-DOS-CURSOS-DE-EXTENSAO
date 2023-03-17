package com.sganzerla.controller;

import com.sganzerla.model.Habilidades;
import com.sganzerla.service.CrudService;
import com.sganzerla.service.HabilidadesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("habilidades")
public class HabilidadesController extends CrudController<Habilidades, Long> {

    private final HabilidadesService habilidadesService;
    @Override
    protected CrudService<Habilidades, Long> getService() {
        return this.habilidadesService;
    }

}
