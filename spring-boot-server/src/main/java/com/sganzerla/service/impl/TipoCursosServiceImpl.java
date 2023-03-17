package com.sganzerla.service.impl;

import com.sganzerla.model.TipoCursos;
import com.sganzerla.repository.TipoCursosRepository;
import com.sganzerla.repository.AuthorityRepository;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.TipoCursosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class TipoCursosServiceImpl extends CrudServiceImpl<TipoCursos, Long>  implements TipoCursosService {

    @Autowired
    AuthUserService authUserService;
    @Autowired
    TipoCursosRepository tipoCursosRepository;

    AuthorityRepository authorityRepository;

    public TipoCursosServiceImpl(TipoCursosRepository tipoCursosRepository, AuthorityRepository authorityRepository) {
        this.tipoCursosRepository = tipoCursosRepository;
        this.authorityRepository = authorityRepository;
    }


    @Override
    protected JpaRepository<TipoCursos, Long> getRepository() {
        return this.tipoCursosRepository;
    }
}
