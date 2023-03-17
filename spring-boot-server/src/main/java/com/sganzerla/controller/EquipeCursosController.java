package com.sganzerla.controller;

import com.sganzerla.model.EquipeCursos;
import com.sganzerla.service.CrudService;
import com.sganzerla.service.EquipeCursosService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("equipe")
public class EquipeCursosController extends CrudController<EquipeCursos, Long> {

    private final EquipeCursosService equipeCursosService;
    @Override
    protected CrudService<EquipeCursos, Long> getService() {
        return this.equipeCursosService;
    }

}
