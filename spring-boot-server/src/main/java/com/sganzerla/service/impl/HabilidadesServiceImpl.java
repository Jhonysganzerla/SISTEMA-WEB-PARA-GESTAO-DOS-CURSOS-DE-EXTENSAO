package com.sganzerla.service.impl;

import com.sganzerla.model.Habilidades;
import com.sganzerla.repository.HabilidadesRepository;
import com.sganzerla.repository.AuthorityRepository;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.HabilidadesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class HabilidadesServiceImpl extends CrudServiceImpl<Habilidades, Long>  implements HabilidadesService {

    @Autowired
    AuthUserService authUserService;
    @Autowired
    HabilidadesRepository habilidadesRepository;

    AuthorityRepository authorityRepository;

    public HabilidadesServiceImpl(HabilidadesRepository habilidadesRepository, AuthorityRepository authorityRepository) {
        this.habilidadesRepository = habilidadesRepository;
        this.authorityRepository = authorityRepository;
    }


    @Override
    protected JpaRepository<Habilidades, Long> getRepository() {
        return this.habilidadesRepository;
    }
}
