package com.sganzerla.service.impl;

import com.sganzerla.model.TipoTransporte;
import com.sganzerla.repository.TipoTransporteRepository;
import com.sganzerla.repository.AuthorityRepository;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.TipoTransporteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class TipoTransporteServiceImpl extends CrudServiceImpl<TipoTransporte, Long>  implements TipoTransporteService {

    @Autowired
    AuthUserService authUserService;
    @Autowired
    TipoTransporteRepository tipoTransporteRepository;

    AuthorityRepository authorityRepository;

    public TipoTransporteServiceImpl(TipoTransporteRepository tipoTransporteRepository, AuthorityRepository authorityRepository) {
        this.tipoTransporteRepository = tipoTransporteRepository;
        this.authorityRepository = authorityRepository;
    }


    @Override
    protected JpaRepository<TipoTransporte, Long> getRepository() {
        return this.tipoTransporteRepository;
    }
}
