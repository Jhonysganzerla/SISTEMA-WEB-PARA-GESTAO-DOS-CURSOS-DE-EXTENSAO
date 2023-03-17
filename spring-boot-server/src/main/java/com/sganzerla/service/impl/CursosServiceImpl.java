package com.sganzerla.service.impl;

import com.sganzerla.model.Cursos;
import com.sganzerla.repository.CursosRepository;
import com.sganzerla.repository.AuthorityRepository;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.CursosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class CursosServiceImpl extends CrudServiceImpl<Cursos, Long>  implements CursosService {

    @Autowired
    AuthUserService authUserService;
    @Autowired
    CursosRepository cursosRepository;

    AuthorityRepository authorityRepository;

    public CursosServiceImpl(CursosRepository cursosRepository, AuthorityRepository authorityRepository) {
        this.cursosRepository = cursosRepository;
        this.authorityRepository = authorityRepository;
    }


    @Override
    protected JpaRepository<Cursos, Long> getRepository() {
        return this.cursosRepository;
    }
}
