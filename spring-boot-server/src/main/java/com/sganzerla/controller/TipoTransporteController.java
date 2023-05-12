package com.sganzerla.controller;

import com.sganzerla.model.TipoTransporte;
import com.sganzerla.service.CrudService;
import com.sganzerla.service.TipoTransporteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("tipotransporte")
public class TipoTransporteController extends CrudController<TipoTransporte, Long> {

    private final TipoTransporteService tipoTransporteService;
    @Override
    protected CrudService<TipoTransporte, Long> getService() {
        return this.tipoTransporteService;
    }

}
