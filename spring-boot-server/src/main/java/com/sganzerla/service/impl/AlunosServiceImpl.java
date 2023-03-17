package com.sganzerla.service.impl;

import com.sganzerla.model.Alunos;
import com.sganzerla.repository.AlunosRepository;
import com.sganzerla.repository.AuthorityRepository;
import com.sganzerla.security.AuthUserService;
import com.sganzerla.service.AlunosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class AlunosServiceImpl extends CrudServiceImpl<Alunos, Long>  implements AlunosService {

    @Autowired
    AuthUserService authUserService;
    @Autowired
    AlunosRepository alunosRepository;

    AuthorityRepository authorityRepository;

    public AlunosServiceImpl(AlunosRepository alunosRepository, AuthorityRepository authorityRepository) {
        this.alunosRepository = alunosRepository;
        this.authorityRepository = authorityRepository;
    }


    @Override
    protected JpaRepository<Alunos, Long> getRepository() {
        return this.alunosRepository;
    }
}
