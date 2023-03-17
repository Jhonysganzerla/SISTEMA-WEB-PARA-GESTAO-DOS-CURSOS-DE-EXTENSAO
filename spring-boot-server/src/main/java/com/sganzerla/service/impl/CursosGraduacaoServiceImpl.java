package com.sganzerla.service.impl;

import com.sganzerla.model.CursosGraduacao;
import com.sganzerla.repository.CursosGraduacaoRepository;
import com.sganzerla.repository.AuthorityRepository;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.CursosGraduacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class CursosGraduacaoServiceImpl extends CrudServiceImpl<CursosGraduacao, Long>  implements CursosGraduacaoService {

    @Autowired
    AuthUserService authUserService;
    @Autowired
    CursosGraduacaoRepository cursosGraduacaoRepository;

    AuthorityRepository authorityRepository;

    public CursosGraduacaoServiceImpl(CursosGraduacaoRepository cursosGraduacaoRepository, AuthorityRepository authorityRepository) {
        this.cursosGraduacaoRepository = cursosGraduacaoRepository;
        this.authorityRepository = authorityRepository;
    }


    @Override
    protected JpaRepository<CursosGraduacao, Long> getRepository() {
        return this.cursosGraduacaoRepository;
    }
}
